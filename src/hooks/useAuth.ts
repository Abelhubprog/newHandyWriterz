import { useState, useEffect } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import { performLogout } from '@/utils/authLogout';
import { deriveUserRole, hasAdminRole } from '@/utils/clerkRoles';

export interface Session {
  user: any;
}

interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: string;
}

const buildDisplayName = (clerkUser: ReturnType<typeof useUser>['user']): string => {
  if (!clerkUser) return 'User';

  const first = clerkUser.firstName ?? '';
  const last = clerkUser.lastName ?? '';
  const fullName = `${first} ${last}`.trim();

  if (fullName) return fullName;
  if (clerkUser.username) return clerkUser.username;
  if (clerkUser.primaryEmailAddress?.emailAddress) {
    return clerkUser.primaryEmailAddress.emailAddress;
  }

  return 'User';
};

export const useAuth = () => {
  const { user: clerkUser, isLoaded, isSignedIn } = useUser();
  const clerk = useClerk();

  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(!isLoaded);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!isLoaded) return;

    const syncUser = async () => {
      setIsLoading(true);
      try {
        if (isSignedIn && clerkUser) {
          const displayName = buildDisplayName(clerkUser);
          const derivedRole = deriveUserRole(clerkUser);

          setUser({
            id: clerkUser.id,
            email: clerkUser.primaryEmailAddress?.emailAddress || '',
            name: displayName,
            avatarUrl: clerkUser.imageUrl || undefined,
            role: derivedRole,
          });

          setSession({ user: clerkUser });
        } else {
          setUser(null);
          setSession(null);
        }
      } catch (err) {
        const formattedError = err instanceof Error ? err : new Error('Unknown authentication error');
        setError(formattedError);
      } finally {
        setIsLoading(false);
      }
    };

    syncUser();
  }, [isLoaded, isSignedIn, clerkUser]);

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await clerk.client.signIn.create({
        identifier: email,
        password,
      });
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to sign in'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithMagicLink = async (email: string) => {
    try {
      setIsLoading(true);
      await clerk.client.signIn.create({
        identifier: email,
        strategy: 'email_link',
        redirectUrl: window.location.origin,
      });
      return { success: true, message: 'Magic link sent to your email' };
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to send magic link'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      setIsLoading(true);

      const [firstName, ...rest] = name.split(' ').filter(Boolean);
      const lastName = rest.join(' ');

      await clerk.client.signUp.create({
        emailAddress: email,
        password,
        firstName: firstName || name,
        lastName: lastName,
      });
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to sign up'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await performLogout(clerk.signOut);
      setUser(null);
      setSession(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to sign out'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updatePassword = async (newPassword: string) => {
    try {
      setIsLoading(true);
      await clerk.user?.updatePassword({ newPassword });
      return { success: true, message: 'Password updated successfully' };
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update password'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const adminFlag = hasAdminRole(clerkUser || undefined) || user?.role === 'admin';

  return {
    user,
    session,
    isLoading,
    error,
    signIn,
    signUp,
    logout,
    signInWithMagicLink,
    updatePassword,
    isAdmin: Boolean(adminFlag),
  };
};
