import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { hasAdminRole } from '@/utils/clerkRoles';
import { Loader } from '@/components/ui/Loader';
import HandyWriterzLogo from '@/components/HandyWriterzLogo';

interface AdminGuardProps {
  children: React.ReactNode;
}

const AdminGuard: React.FC<AdminGuardProps> = ({ children }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const location = useLocation();

  // While Clerk is loading, show a friendly loader (prevents premature redirects)
  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <HandyWriterzLogo className="w-16 h-16 mb-6" />
        <Loader size="lg" />
        <p className="mt-4 text-gray-600">Checking admin access...</p>
      </div>
    );
  }

  // Not signed in → send to admin login preserving the intended location
  if (!isSignedIn) {
    return <Navigate to="/auth/admin-login" state={{ from: location }} replace />;
  }

  // Signed in but without admin role → block access
  const isAdmin = hasAdminRole(user);
  if (!isAdmin) {
    return <Navigate to="/auth/admin-login" state={{ from: location }} replace />;
  }

  // Authorized
  return <>{children}</>;
};

export default AdminGuard;
