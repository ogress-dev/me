// Vercel Edge adapter that delegates to the existing server.fetch handler
import server from '../src/server';

// Tell Vercel this function must run on the Edge runtime
export const config = { runtime: 'edge' } as const;

// Vercel Edge uses the Web Fetch handler signature.
export default async function handler(request: Request) {
  try {
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
