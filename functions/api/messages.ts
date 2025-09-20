import mod from '../../../api/messages';

export const onRequest: PagesFunction = async ({ request, env }) => {
  const shimEnv: any = { ...env };
  if ((env as any).DB && !(env as any).DATABASE) {
    shimEnv.DATABASE = (env as any).DB;
  }
  return (mod as any).fetch(request, shimEnv);
};
