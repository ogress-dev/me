// Vercel Edge adapter that delegates to the existing server.fetch handler
// Tell Vercel this function must run on the Edge runtime
export const config = { runtime: 'edge' } as const;

// Try to load the built server bundle from dist/server if present (production),
// otherwise fall back to the source server during local development.
async function loadServerEntry() {
  try {
    // Prefer built server bundle
    const built = await import('../dist/server/index.js');
    // The built bundle exports the worker as default (see dist/server/index.js)
    if (built && (built as any).default) return (built as any).default;
  } catch (e) {
    // ignore and try source
  }

  // Fallback to source (useful for local/dev where dist may not exist)
  const src = await import('../src/server');
  return (src as any).default ?? src;
}

// Vercel Edge uses the Web Fetch handler signature.
export default async function handler(request: Request) {
  try {
    const server = await loadServerEntry();
    if (!server || typeof server.fetch !== 'function') {
      throw new Error('Invalid server entry: missing fetch handler');
    }

    // server.fetch expects (request, env, ctx). Vercel doesn't provide env/ctx here,
    // so pass undefined for them.
    const response = await server.fetch(request, undefined, undefined);
    return response;
  } catch (err) {
    // Log and return the error stack to help debugging in Vercel logs/response
    console.error('Edge adapter caught error:', err);
    const message = err && typeof err === 'object' && 'stack' in err ? String((err as any).stack) : String(err);
    return new Response(JSON.stringify({ message }), { status: 500, headers: { 'content-type': 'application/json' } });
  }
}
