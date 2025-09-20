export const onRequest: PagesFunction = async ({ env }) => {
  const started = Date.now();
  const body: Record<string, unknown> = {
    ok: true,
    time: new Date().toISOString(),
  };

  // Best-effort lightweight checks (non-fatal)
  try {
    if ((env as any).DB && typeof (env as any).DB.prepare === 'function') {
      await (env as any).DB.prepare('SELECT 1').first();
      body.d1 = 'ok';
    }
  } catch {
    body.d1 = 'error';
  }

  try {
    if ((env as any).STORAGE && typeof (env as any).STORAGE.head === 'function') {
      // a noop head on a non-existing key to confirm binding
      await (env as any).STORAGE.head('__health__');
      body.r2 = 'ok';
    }
  } catch {
    body.r2 = 'error';
  }

  return new Response(
    JSON.stringify({ ...body, durationMs: Date.now() - started }),
    { headers: { 'content-type': 'application/json' } }
  );
};
