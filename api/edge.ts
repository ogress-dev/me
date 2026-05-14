// Vercel Edge adapter that delegates to the existing server.fetch handler
import server from '../src/server';

// Vercel Edge uses the Web Fetch handler signature.
export default async function handler(request: Request) {
  // server.fetch expects (request, env, ctx). Vercel doesn't provide env/ctx here,
  // so pass undefined for them.
  const response = await server.fetch(request, undefined, undefined);
  return response;
}
