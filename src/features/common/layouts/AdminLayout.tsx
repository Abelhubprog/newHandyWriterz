import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/features/common/components/navigation/Sidebar';
import Header from '@/features/common/components/navigation/Header';

const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
  <Sidebar />

      <div className="lg:pl-72">
        <Header setSidebarOpen={setSidebarOpen} />

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
