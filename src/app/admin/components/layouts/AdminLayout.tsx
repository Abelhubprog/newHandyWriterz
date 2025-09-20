import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Tags,
  Users,
  MessageSquare,
  Settings,
  ChevronsLeft,
  ChevronsRight,
  Menu,
  X,
  Briefcase,
  BarChart3,
} from 'lucide-react';
import clsx from 'clsx';
import { Toaster } from '@/components/ui/toaster';
import { useAuth } from '@clerk/clerk-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
  { name: 'Content', icon: FileText, path: '/admin/content' },
  { name: 'Services', icon: Briefcase, path: '/admin/services' },
  { name: 'Categories', icon: Tags, path: '/admin/categories' },
  { name: 'Users', icon: Users, path: '/admin/users' },
  { name: 'Messages', icon: MessageSquare, path: '/admin/messages' },
  { name: 'Analytics', icon: BarChart3, path: '/admin/analytics' },
  { name: 'Settings', icon: Settings, path: '/admin/settings' },
];

const Sidebar: React.FC<{ isCollapsed: boolean; setCollapsed: (c: boolean) => void }> = ({ isCollapsed, setCollapsed }) => {
  const { user } = useAuth();

  return (
    <aside
      className={clsx(
        'bg-slate-900 text-slate-100 flex flex-col transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-20' : 'w-64'
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        {!isCollapsed && <span className="text-lg font-bold">HandyWriterz</span>}
        <button onClick={() => setCollapsed(!isCollapsed)} className="p-2 rounded-md hover:bg-slate-800">
          {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
        </button>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/admin'}
            className={({ isActive }) =>
              clsx(
                'flex items-center p-2 rounded-md text-sm font-medium transition-colors',
                isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white',
                isCollapsed && 'justify-center'
              )
            }
            title={isCollapsed ? item.name : undefined}
          >
            <item.icon className={clsx('h-5 w-5', !isCollapsed && 'mr-3')} />
            {!isCollapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center">
          <img
            src={user?.imageUrl}
            alt={user?.fullName || 'User'}
            className="h-10 w-10 rounded-full"
          />
          {!isCollapsed && (
            <div className="ml-3">
              <p className="text-sm font-semibold text-white">{user?.fullName}</p>
              <p className="text-xs text-slate-400">{user?.primaryEmailAddress?.emailAddress}</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

const AdminLayout: React.FC = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar isCollapsed={isSidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed inset-y-0 left-0 z-50" onClick={(e) => e.stopPropagation()}>
            <Sidebar isCollapsed={false} setCollapsed={() => {}} />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 md:hidden flex items-center justify-between p-4">
          <span className="text-lg font-bold">HandyWriterz Admin</span>
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 lg:p-8">
          <ErrorBoundary>
            <Suspense fallback={<div className="flex justify-center items-center h-full"><p>Loading page...</p></div>}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
      <Toaster />
    </div>
  );
};

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // A simple error boundary for now. Can be expanded later.
    return <>{children}</>;
};

const Suspense: React.FC<{ children: React.ReactNode, fallback: React.ReactNode }> = ({ children, fallback }) => {
    // A simple suspense for now. Can be expanded later.
    return <React.Suspense fallback={fallback}>{children}</React.Suspense>;
};


export default AdminLayout;
