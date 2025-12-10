import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'ocss.dev.local', // your custom domain
    port: 5173,
    strictPort: true,       // optional, prevents Vite from picking another port
  },
});