import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: [ ".eternl.art", "eternl.io", ".eternl.io", "localhost", ".localhost"],
    fs: {
      allow: [path.resolve(__dirname, '..')]
    }
  }
});
