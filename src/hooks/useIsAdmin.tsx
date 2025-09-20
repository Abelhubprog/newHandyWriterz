import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { hasAdminRole } from '@/utils/clerkRoles';

/**
 * Hook that resolves whether the currently authenticated Clerk user has admin access.
 */
export const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    setIsLoading(false);
    setIsAdmin(hasAdminRole(user));
  }, [isLoaded, user]);

  return { isAdmin, isLoading };
};

export default useIsAdmin;
