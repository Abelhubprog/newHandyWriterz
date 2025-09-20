import React, { lazy, Suspense } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import AdminLayout from '@/features/common/layouts/AdminLayout';
import AdminGuard from '@/components/auth/AdminGuard';
import { Loader } from '@/components/ui/Loader';

// Helper for suspense fallback
const withSuspense = (Component: React.ComponentType<any>) => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader size="lg" /></div>}>
      <Component />
    </Suspense>
  );
};

// Lazy load pages for the new admin dashboard
const Dashboard = lazy(() => import('@/features/dashboard/Dashboard'));
const Posts = lazy(() => import('@/features/posts/Posts'));
const Users = lazy(() => import('@/features/users/Users'));
const Messages = lazy(() => import('@/features/messages/Messages'));
const Comments = lazy(() => import('@/features/comments/Comments'));
const Files = lazy(() => import('@/features/files/Files'));
const Settings = lazy(() => import('@/features/settings/Settings'));
const NotFound = lazy(() => import('@/pages/not-found'));
// Bridge legacy useful admin pages into the active router via features/content aliases
const ServicesList = lazy(() => import('@/features/content/ServicesPage'));
const ServiceExperienceEditor = lazy(() => import('@/features/content/ServiceExperienceEditor'));

export const adminRoutes: RouteObject[] = [
  {
    path: 'admin',
    element: (
      <AdminGuard>
        <AdminLayout />
      </AdminGuard>
    ),
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: 'dashboard', element: withSuspense(Dashboard) },
      { path: 'posts', element: withSuspense(Posts) },
      { path: 'users', element: withSuspense(Users) },
      { path: 'messages', element: withSuspense(Messages) },
      { path: 'comments', element: withSuspense(Comments) },
      { path: 'files', element: withSuspense(Files) },
  // Consolidated routes to existing admin content editors (kept read-only wiring)
  { path: 'services', element: withSuspense(ServicesList) },
  { path: 'services/edit/:service/experience', element: withSuspense(ServiceExperienceEditor) },
      { path: 'settings', element: withSuspense(Settings) },
      { path: '*', element: withSuspense(NotFound) },
    ],
  },
];
