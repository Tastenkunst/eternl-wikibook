// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///Users/tk/Documents/github/eternl-wikibook/page/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/tk/Documents/github/eternl-wikibook/page/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import tailwindcss from "file:///Users/tk/Documents/github/eternl-wikibook/page/node_modules/@tailwindcss/vite/dist/index.mjs";
import { viteStaticCopy } from "file:///Users/tk/Documents/github/eternl-wikibook/page/node_modules/vite-plugin-static-copy/dist/index.js";
var __vite_injected_original_dirname = "/Users/tk/Documents/github/eternl-wikibook/page";
console.log(path.resolve(__vite_injected_original_dirname, "../.gitbook/assets/pictures/**/*"));
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "../.gitbook/assets/*",
          // Don't use path.resolve for Windows compatibility
          dest: "gitbook-assets"
        },
        {
          src: "../.gitbook/assets/pictures/**/*",
          // Don't use path.resolve for Windows compatibility
          dest: "gitbook-assets/pictures"
        },
        {
          src: "../.gitbook/assets/icons/**/*",
          // Don't use path.resolve for Windows compatibility
          dest: "gitbook-assets/icons"
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  server: {
    fs: {
      allow: [".."]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdGsvRG9jdW1lbnRzL2dpdGh1Yi9ldGVybmwtd2lraWJvb2svcGFnZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3RrL0RvY3VtZW50cy9naXRodWIvZXRlcm5sLXdpa2lib29rL3BhZ2Uvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3RrL0RvY3VtZW50cy9naXRodWIvZXRlcm5sLXdpa2lib29rL3BhZ2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAnQHRhaWx3aW5kY3NzL3ZpdGUnO1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSc7XG5jb25zb2xlLmxvZyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLmdpdGJvb2svYXNzZXRzL3BpY3R1cmVzLyoqLyonKSlcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICB0YWlsd2luZGNzcygpLFxuICAgIHZpdGVTdGF0aWNDb3B5KHtcbiAgICAgIHRhcmdldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJy4uLy5naXRib29rL2Fzc2V0cy8qJywgLy8gRG9uJ3QgdXNlIHBhdGgucmVzb2x2ZSBmb3IgV2luZG93cyBjb21wYXRpYmlsaXR5XG4gICAgICAgICAgZGVzdDogJ2dpdGJvb2stYXNzZXRzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAnLi4vLmdpdGJvb2svYXNzZXRzL3BpY3R1cmVzLyoqLyonLCAvLyBEb24ndCB1c2UgcGF0aC5yZXNvbHZlIGZvciBXaW5kb3dzIGNvbXBhdGliaWxpdHlcbiAgICAgICAgICBkZXN0OiAnZ2l0Ym9vay1hc3NldHMvcGljdHVyZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICcuLi8uZ2l0Ym9vay9hc3NldHMvaWNvbnMvKiovKicsIC8vIERvbid0IHVzZSBwYXRoLnJlc29sdmUgZm9yIFdpbmRvd3MgY29tcGF0aWJpbGl0eVxuICAgICAgICAgIGRlc3Q6ICdnaXRib29rLWFzc2V0cy9pY29ucydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJylcbiAgICB9XG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGZzOiB7XG4gICAgICBhbGxvdzogWycuLiddXG4gICAgfVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1QsT0FBTyxVQUFVO0FBQ2hWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLHNCQUFzQjtBQUovQixJQUFNLG1DQUFtQztBQUt6QyxRQUFRLElBQUksS0FBSyxRQUFRLGtDQUFXLGtDQUFrQyxDQUFDO0FBQ3ZFLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxJQUNaLGVBQWU7QUFBQSxNQUNiLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxLQUFLO0FBQUE7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsS0FBSztBQUFBO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLEtBQUs7QUFBQTtBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsT0FBTyxDQUFDLElBQUk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
