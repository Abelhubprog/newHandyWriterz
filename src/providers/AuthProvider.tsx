import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useUser, useAuth as useClerkAuth, useClerk } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import { performLogout } from '@/utils/authLogout';
import { hasAdminRole } from '@/utils/clerkRoles';

// Auth Context Type Definition
type AuthContextType = {
  user: any;
  isAdmin: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{success: boolean, error?: any}>;
  loginAdmin: (email: string, password: string) => Promise<{success: boolean, error?: any}>;
  signup: (email: string, password: string, fullName: string) => Promise<{success: boolean, error?: any}>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{success: boolean, error?: any}>;
  updatePassword: (password: string) => Promise<{success: boolean, error?: any}>;
  sendPasswordResetEmail: (email: string) => Promise<{success: boolean, error?: any}>;
  signInWithMagicLink: (email: string) => Promise<{success: boolean, error?: any}>;
  redirectToDashboard: () => void;
  redirectToAdminDashboard: () => void;
  redirectToSignUp: () => void;
  redirectToSignIn: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, isLoaded: userLoaded } = useUser();
  const { isLoaded: authLoaded, signOut } = useClerkAuth();
  const clerk = useClerk();
  const [isCheckingAdmin, setIsCheckingAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isLoading = !userLoaded || !authLoaded || isCheckingAdmin;

  const checkAdminStatusAndUpdate = async (currentUser: ReturnType<typeof useUser>['user']) => {
    setIsCheckingAdmin(true);
    try {
      const isUserAdmin = currentUser ? hasAdminRole(currentUser) : false;
      setIsAdmin(isUserAdmin);
      return isUserAdmin;
    } finally {
      setIsCheckingAdmin(false);
    }
  };

  // Effect to check admin status when user changes
  useEffect(() => {
    if (user) {
      checkAdminStatusAndUpdate(user);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    try {
      const result = await clerk.client.signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        // User profile is managed by Clerk, no need for Supabase sync

        const from = location.state?.from?.pathname || '/dashboard';
        navigate(from, { replace: true });
        return { success: true };
      } else {
        toast.error("Verification Required: Additional verification required. Please contact support.");
        return { success: false, error: "Additional verification required" };
      }
    } catch (error: any) {
      toast.error(`Login Failed: ${error.message || "Unable to sign in"}`);
      return { success: false, error };
    }
  };

  const loginAdmin = async (email: string, password: string) => {
    try {
      const result = await clerk.client.signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await clerk.user?.reload?.();

        const refreshedUser = clerk.user ?? user;
        const isUserAdmin = await checkAdminStatusAndUpdate(refreshedUser);

        if (isUserAdmin) {
          toast.success("Welcome Back: Successfully signed in as admin");
          const from = location.state?.from?.pathname || '/admin';
          navigate(from, { replace: true });
          return { success: true };
        } else {
          toast.error("Access Denied: Not authorized as admin");
          await signOut();
          navigate('/auth/sign-in', { replace: true });
          return { success: false, error: "Not authorized as admin" };
        }
      } else {
        toast.error("Login Failed: Unable to sign in as admin");
        return { success: false, error: "Login failed" };
      }
    } catch (error: any) {
      toast.error(`Login Failed: ${error.message || "Unable to sign in as admin"}`);
      return { success: false, error };
    }
  };

  const signup = async (email: string, password: string, fullName: string) => {
    try {
      const result = await clerk.client.signUp.create({
        emailAddress: email,
        password,
        firstName: fullName.split(' ')[0],
        lastName: fullName.split(' ').slice(1).join(' ') || '',
      });

      if (result.status === "complete") {
        // User profile is managed by Clerk automatically

        await login(email, password);
        return { success: true };
      } else {
        toast.error("Verification Required: Additional verification required. Check your email.");
        return { success: false, error: "Additional verification required" };
      }
    } catch (error: any) {
      toast.error(`Signup Failed: ${error.message || "Unable to create account"}`);
      return { success: false, error };
    }
  };

  const logout = async () => {
    try {
      await performLogout(clerk.signOut);
      setIsAdmin(false);
      navigate('/auth/sign-in', { replace: true });
    } catch (error: any) {
      toast.error(`Logout Failed: ${error.message || "Unable to sign out"}`);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await clerk.client.signIn.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });
      toast.success("Reset Email Sent: Check your email for password reset instructions");
      return { success: true };
    } catch (error: any) {
      toast.error(`Reset Failed: ${error.message || "Unable to reset password"}`);
      return { success: false, error };
    }
  };

  const updatePassword = async (password: string) => {
    try {
      if (!user || !clerk?.user) throw new Error("No user found");
      
      await clerk?.user?.updatePassword({ newPassword: password });
      toast.success("Password Updated: Your password has been successfully changed");
      return { success: true };
    } catch (error: any) {
      toast.error(`Update Failed: ${error.message || "Unable to update password"}`);
      return { success: false, error };
    }
  };

  const sendPasswordResetEmail = async (email: string) => {
    try {
      await clerk.client.signIn.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });
      toast.success("Reset Email Sent: Check your email for password reset instructions");
      return { success: true };
    } catch (error: any) {
      toast.error(`Reset Failed: ${error.message || "Unable to send reset email"}`);
      return { success: false, error };
    }
  };

  const signInWithMagicLink = async (email: string) => {
    try {
      await clerk.client.signIn.create({
        strategy: "email_link",
        identifier: email,
        redirectUrl: window.location.origin,
      });
      toast.success("Magic Link Sent: Check your email for the sign in link");
      return { success: true };
    } catch (error: any) {
      toast.error(`Link Failed: ${error.message || "Unable to send magic link"}`);
      return { success: false, error };
    }
  };

  const redirectToDashboard = () => navigate('/dashboard', { replace: true });
  const redirectToAdminDashboard = () => navigate('/admin', { replace: true });
  const redirectToSignUp = () => navigate('/auth/sign-up', { replace: true });
  const redirectToSignIn = () => navigate('/auth/sign-in', { replace: true });

  const value = {
    user,
    isAdmin,
    isLoading,
    login,
    loginAdmin,
    signup,
    logout,
    resetPassword,
    updatePassword,
    sendPasswordResetEmail,
    signInWithMagicLink,
    redirectToDashboard,
    redirectToAdminDashboard,
    redirectToSignUp,
    redirectToSignIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

