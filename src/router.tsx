import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  Outlet, // Import Outlet to render nested routes
  useRouteError,
  Link
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';

// Inline Orders component (fallback included)
const OrdersComponent: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-6">My Orders (Fallback)</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-700">
        This is a fallback component for the Orders page. The main component could not be loaded.
      </p>
    </div>
  </div>
);

// Inline Messages component (fallback included)
const MessagesComponent: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-6">My Messages (Fallback)</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-700">
        This is a fallback component for the Messages page. The main component could not be loaded.
      </p>
    </div>
  </div>
);

// Inline Profile component (fallback included)
const ProfileComponent: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-6">My Profile (Fallback)</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-700">
        This is a fallback component for the Profile page. The main component could not be loaded.
      </p>
    </div>
  </div>
);

// Layouts
import RootLayoutComponent from './components/layouts/RootLayout'; // Renamed import to avoid conflict with RootLayoutWithOutlet
import DashboardLayout from './components/layouts/DashboardLayout';

// Auth components
import AuthGuard from './components/auth/AuthGuard';
import AdminGuard from './components/auth/AdminGuard';
import { Loader } from './components/ui/Loader';

// Admin components
import { adminRoutes } from './features/router';

// Error component
const ErrorFallback: React.FC<{ error: Error; resetErrorBoundary: () => void }> = ({ error, resetErrorBoundary }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-md">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
        <p className="mt-2 text-gray-600">{error.message}</p>
        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={resetErrorBoundary}
            className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Try again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go home
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Wrap components with ErrorBoundary and Suspense
const withSuspenseAndError = (Component: React.ComponentType<any>) => {
  return function WrappedComponent() {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader size="lg" /></div>}>
          <Component />
        </Suspense>
      </ErrorBoundary>
    );
  };
};

// Root layout with outlet for nested routes
const RouteErrorElement: React.FC = () => {
  const err = useRouteError() as any;
  const message = err?.statusText || err?.message || 'Something went wrong while loading this page.';
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>We hit a snag</h2>
        <p style={{ color: '#64748b', marginBottom: 16 }}>{message}</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button onClick={() => window.location.reload()} style={{ padding: '8px 16px', borderRadius: 999, background: '#0f172a', color: '#fff' }}>Try again</button>
          <a href="/" style={{ padding: '8px 16px', borderRadius: 999, border: '1px solid #e2e8f0', color: '#334155' }}>Go home</a>
        </div>
      </div>
    </div>
  );
};

const RootLayoutWithOutlet = () => {
  // RootLayoutComponent already renders its own <Outlet /> internally
  return (
    <Suspense fallback={<div>Loading layout...</div>}>
      <RootLayoutComponent />
    </Suspense>
  );
};

// Lazy load pages
const Homepage = lazy(() => import('./pages/Homepage'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const Profile = lazy(() => import('./pages/dashboard/Profile'));
const Messages = lazy(() => import('./components/Messages/MessageCenter'));
const Orders = lazy(() => import('./pages/dashboard/Orders'));
const Settings = lazy(() => import('./pages/dashboard/Settings'));
const DocumentsUpload = lazy(() => import('./pages/dashboard/DocumentsUpload'));
const CheckTurnitin = lazy(() => import('./pages/tools/check-turnitin'));
const LearningHub = lazy(() => import('./pages/LearningHub'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Pricing = lazy(() => import('./pages/Pricing'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Services = lazy(() => import('./pages/Services'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Support = lazy(() => import('./pages/Support'));
const Payment = lazy(() => import('./pages/Payment'));
const Login = lazy(() => import('./pages/auth/login'));
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const AdminLogin = lazy(() => import('./pages/auth/admin-login'));
const MfaChallenge = lazy(() => import('./pages/auth/mfa-challenge'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));

// NEW DOMAIN PAGES
const AdultHealthDomain = lazy(() => import('./pages/domains/AdultHealth'));
const MentalHealthDomain = lazy(() => import('./pages/domains/MentalHealth'));
const ChildNursingDomain = lazy(() => import('./pages/domains/ChildNursing'));
const SocialWorkDomain = lazy(() => import('./pages/domains/SocialWork'));
const TechnologyDomain = lazy(() => import('./pages/domains/Technology'));
const AIDomain = lazy(() => import('./pages/domains/AI'));
const CryptoDomain = lazy(() => import('./pages/domains/Crypto'));

// LEGACY SERVICE PAGES (to be archived) – components removed; redirect routes handle these paths
const ApiTestPage = lazy(() => import('./pages/ApiTestPage'));
const NotFound = lazy(() => import('./pages/not-found'));

// Create router for RouterProvider - changed to use createBrowserRouter
// Following Clerk's recommendation for routing to handle multi-page auth correctly
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutWithOutlet />,
    errorElement: <RouteErrorElement />, // Use the wrapper component for the root layout
    children: [ // Corrected array syntax
      // Public Routes
      { path: "", element: withSuspenseAndError(Homepage)() },
      { path: "about", element: withSuspenseAndError(About)() },
      { path: "contact", element: withSuspenseAndError(Contact)() },
      { path: "faq", element: withSuspenseAndError(FAQ)() },
      { path: "privacy", element: withSuspenseAndError(Privacy)() },
      { path: "terms", element: withSuspenseAndError(Terms)() },
      { path: "pricing", element: withSuspenseAndError(Pricing)() },
      { path: "services", element: withSuspenseAndError(Services)() },
      { path: "how-it-works", element: withSuspenseAndError(HowItWorks)() },
      { path: "support", element: withSuspenseAndError(Support)() },
      { path: "payment", element: withSuspenseAndError(Payment)() },
      { path: "api-test", element: withSuspenseAndError(ApiTestPage)() },

      // Domain Pages (specific)
      { path: "d/adult-health", element: withSuspenseAndError(AdultHealthDomain)() },
      { path: "d/mental-health", element: withSuspenseAndError(MentalHealthDomain)() },
      { path: "d/child-nursing", element: withSuspenseAndError(ChildNursingDomain)() },
      { path: "d/social-work", element: withSuspenseAndError(SocialWorkDomain)() },
      { path: "d/technology", element: withSuspenseAndError(TechnologyDomain)() },
      { path: "d/ai", element: withSuspenseAndError(AIDomain)() },
      { path: "d/crypto", element: withSuspenseAndError(CryptoDomain)() },

      // Legacy Service Pages (to be archived/redirected)
      { path: "services/adult-health-nursing", element: <Navigate to="/d/adult-health" replace /> },
      { path: "services/mental-health-nursing", element: <Navigate to="/d/mental-health" replace /> },
      { path: "services/child-nursing", element: <Navigate to="/d/child-nursing" replace /> },
      { path: "services/social-work", element: <Navigate to="/d/social-work" replace /> },
      { path: "services/crypto", element: <Navigate to="/d/crypto" replace /> },
      { path: "services/ai", element: <Navigate to="/d/ai" replace /> },

  // Other service pages
  { path: "services/special-education", element: <Navigate to="/services" replace /> },
  { path: "services/advanced-practice-nursing", element: <Navigate to="/services" replace /> },

      // Tool Pages
      { path: "tools/check-turnitin", element: withSuspenseAndError(CheckTurnitin)() },
      { path: "learning-hub", element: withSuspenseAndError(LearningHub)() },
      { path: "check-turnitin", element: <Navigate to="/tools/check-turnitin" replace /> },

      // Auth Routes
      { path: "sign-in", element: withSuspenseAndError(Login)() },
      { path: "sign-up", element: withSuspenseAndError(SignUp)() },
      { path: "auth/admin-login", element: withSuspenseAndError(AdminLogin)() },
      { path: "forgot-password", element: withSuspenseAndError(ForgotPassword)() },
      { path: "auth/mfa-challenge", element: withSuspenseAndError(MfaChallenge)() },

      // Redirects for old paths - regular user auth
      { path: "auth/login", element: <Navigate to="/sign-in" replace /> },
      { path: "auth/sign-in", element: <Navigate to="/sign-in" replace /> },
      { path: "auth/sign-up", element: <Navigate to="/sign-up" replace /> },
      { path: "auth/forgot-password", element: <Navigate to="/forgot-password" replace /> },
      { path: "login", element: <Navigate to="/sign-in" replace /> },

      // Redirects for admin paths - keep admin paths separate
      { path: "admin/login", element: <Navigate to="/auth/admin-login" replace /> },

      // Clerk additional auth routes needed for hash routing
      { path: "sign-in/*", element: withSuspenseAndError(Login)() },
      // Removed md: element: as this is not valid syntax in an array context
      { path: "sign-up/*", element: withSuspenseAndError(SignUp)() },

      // Clerk callback routes
      // Removed lg: element: as this is not valid syntax in an array context
      { path: "auth/sso-callback", element: <div className="min-h-screen flex items-center justify-center"><Loader size="lg" /></div> },
    ]
  },

  // Protected Dashboard Routes
  {
    path: "/dashboard",
    element: <AuthGuard><DashboardLayout /></AuthGuard>,
    errorElement: <RouteErrorElement />,
    children: [ // Corrected array syntax
      { path: "", element: withSuspenseAndError(Dashboard)() },
      { path: "profile", element: withSuspenseAndError(Profile)() },
      { path: "orders", element: withSuspenseAndError(Orders)() },
      { path: "messages", element: withSuspenseAndError(Messages)() },
      // Removed md: element: as this is not valid syntax in an array context
      { path: "settings", element: withSuspenseAndError(Settings)() },
      // Removed lg: element: as this is not valid syntax in an array context
      { path: "documents", element: withSuspenseAndError(DocumentsUpload)() },
    ]
  },

  // NEW Protected Admin Routes
  ...adminRoutes,

  // 404 Not Found
  { path: "*", element: withSuspenseAndError(NotFound)() },
]);
