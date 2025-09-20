import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth, useUser } from '@clerk/clerk-react';
import { Loader2 } from 'lucide-react';
import { hasAdminRole } from '@/utils/clerkRoles';

interface AdminRouteProps {
  children: React.ReactNode;
}

export const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const location = useLocation();
  const [isAdminUser, setIsAdminUser] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      setIsAdminUser(false);
      return;
    }

    setIsAdminUser(hasAdminRole(user));
  }, [isLoaded, isSignedIn, user]);

  if (!isLoaded || isAdminUser === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
        <span className="ml-2 text-lg text-gray-700">Verifying access...</span>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
  }

  if (!isAdminUser) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;
