import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: '../.gitbook/assets/*', // Don't use path.resolve for Windows compatibility
          dest: 'gitbook-assets'
        },
        {
          src: '../.gitbook/assets/pictures/**/*', // Don't use path.resolve for Windows compatibility
          dest: 'gitbook-assets/pictures'
        },
        {
          src: '../.gitbook/assets/icons/**/*', // Don't use path.resolve for Windows compatibility
          dest: 'gitbook-assets/icons'
        },
        {
          src: '../.gitbook/assets/hugeicons/**/*', // Don't use path.resolve for Windows compatibility
          dest: 'gitbook-assets/hugeicons'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, '../.gitbook/assets')
    }
  },
  server: {
    fs: {
      allow: [path.resolve(__dirname, '..')]
    }
  }
});
