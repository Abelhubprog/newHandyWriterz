import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    // Static definitions only - no dynamic env processing
    'global': 'window'
  },
  optimizeDeps: {
    exclude: ['@reown/appkit', '@reown/appkit-adapter-wagmi'],
    include: ['react', 'react-dom', 'react-router-dom']
  },
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    open: true,
    cors: true,
    hmr: {
      port: 5173, // Use same port to avoid protocol upgrade issues
      host: 'localhost',
      overlay: true,
      protocol: 'ws' // Explicitly set WebSocket protocol
    },
    fs: {
      strict: false
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    // Proxy API requests to Cloudflare Functions in development
    proxy: {
      '/api': {
        target: 'http://localhost:8788',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
});