type SignOutFn = (params?: { redirectUrl?: string }) => Promise<void>;

export async function performLogout(signOut?: SignOutFn) {
  try {
    try { localStorage.clear(); sessionStorage.clear(); } catch (error) {}

    if (typeof caches !== 'undefined') {
      try {
        const names = await caches.keys();
        await Promise.all(names.map((name) => caches.delete(name)));
      } catch (error) {
        // ignore cache deletion errors
      }
    }

    if (signOut) {
      await signOut({ redirectUrl: '/' });
      return;
    }

    if (typeof window !== 'undefined') {
      const globalClerk = (window as any).Clerk;
      if (globalClerk && typeof globalClerk.signOut === 'function') {
        await globalClerk.signOut({ redirectUrl: '/' });
        return;
      }
    }
  } catch (error) {
    console.error('performLogout error', error);
  }

  if (typeof window !== 'undefined') {
    window.location.href = '/';
  }
}
