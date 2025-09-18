/**
 * Main Application Entry
 *
 * Sets up the React application and all required providers.
 *
 * @file src/main.tsx
 */

// Load polyfills first
import './polyfills';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// Use the app's centralized ClerkProvider so config is consistent across the app
import { ClerkProvider } from './providers/ClerkProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
// Removed SupabaseProvider - using Cloudflare instead
import { ThemeProvider } from './theme/ThemeContext';
import Web3Provider from './providers/Web3Provider';
import { logEnvironmentStatus } from './utils/checkEnv';
import './index.css';
import { router } from './router';
import ErrorBoundary from './components/common/ErrorBoundary';

// Check environment on startup
logEnvironmentStatus();

// Initialize React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

// Get Clerk publishable key with fallback
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 'pk_live_Y2xlcmsuaGFuZHl3cml0ZXJ6LmNvbSQ';

// Try to render the application, with error handling
try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Root element not found");
  }

  ReactDOM.createRoot(rootElement).render(
    <HelmetProvider>
      <Web3Provider>
        <ThemeProvider>
          <ClerkProvider>
            <QueryClientProvider client={queryClient}>
              <Toaster />
              <RouterProvider router={router} />
            </QueryClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </Web3Provider>
    </HelmetProvider>
  );
} catch (error) {

  // Render a fallback UI
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: system-ui, sans-serif;">
        <h1 style="color: #0369a1;">HandyWriterz</h1>
        <p>We're experiencing technical difficulties. Please try again later.</p>
      </div>
    `;
  }
}
