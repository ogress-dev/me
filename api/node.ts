// Vercel Serverless (Node) adapter that delegates to the existing server.fetch handler
import server from '../src/server';

// CommonJS/ESM interop: server may export default or module.exports
const getServer = async () => {
  // If we've built a dist/server bundle on deploy, prefer that
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // Node dynamic import for dist bundle
    // Try require first (built output might be CommonJS)
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const built = require('../dist/server/index.js');
    return built && built.default ? built.default : built;
  } catch (_) {
    // fall back to source
  }

  return server as any;
};

export default async function handler(req: any, res: any) {
  try {
    const srv = await getServer();
    if (!srv || typeof srv.fetch !== 'function') {
      throw new Error('Invalid server entry: missing fetch handler');
    }

    // Convert express-like req/res to Request/Response for server.fetch
    const { method, headers } = req;
    const url = `${req.protocol || 'https'}://${req.get('host')}${req.originalUrl || req.url}`;
    const body = req.rawBody ?? req.body;

    const request = new Request(url, {
      method,
      headers,
      body: body && typeof body === 'string' ? body : undefined,
    });

    const response = await srv.fetch(request, undefined, undefined);

    // Pipe response back
    res.status(response.status);
    response.headers.forEach((value: string, key: string) => res.setHeader(key, value));
    const text = await response.text();
    res.send(text);
  } catch (err) {
    console.error('Node adapter caught error:', err);
    res.status(500).json({ message: String(err && (err as any).stack ? (err as any).stack : err) });
  }
}
