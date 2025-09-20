import mod from '../../../api/payments';

export const onRequest: PagesFunction = async ({ request, env }) => {
  // Delegate to the module worker fetch handler
  // Note: our code expects env.DATABASE; Pages D1 binding can be named DB.
  // Provide a small shim if only DB is present.
  const shimEnv: any = { ...env };
  if ((env as any).DB && !(env as any).DATABASE) {
    shimEnv.DATABASE = (env as any).DB;
  }
  return (mod as any).fetch(request, shimEnv);
};
