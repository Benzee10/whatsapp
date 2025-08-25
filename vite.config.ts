import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        host: '0.0.0.0',
        port: 5173,
        allowedHosts: [
          'effb4a6a-7a34-438b-882b-62ea514a3024-00-2itxgzs2e7m2c.worf.replit.dev'
        ],
        cors: true,
        hmr: {
          host: 'effb4a6a-7a34-438b-882b-62ea514a3024-00-2itxgzs2e7m2c.worf.replit.dev',
          port: 443
        }
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
