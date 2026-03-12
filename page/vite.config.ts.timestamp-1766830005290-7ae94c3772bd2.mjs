// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///C:/eternl-wikibook/page/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/eternl-wikibook/page/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import tailwindcss from "file:///C:/eternl-wikibook/page/node_modules/@tailwindcss/vite/dist/index.mjs";
import { viteStaticCopy } from "file:///C:/eternl-wikibook/page/node_modules/vite-plugin-static-copy/dist/index.js";
var __vite_injected_original_dirname = "C:\\eternl-wikibook\\page";
console.log(path.resolve(__vite_injected_original_dirname, "../.gitbook/assets/pictures/**/*"));
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "../.gitbook/assets/pictures/**/*",
          // path.resolve(__dirname, '../.gitbook/assets/pictures/**/*'),
          dest: "gitbook-assets"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxldGVybmwtd2lraWJvb2tcXFxccGFnZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcZXRlcm5sLXdpa2lib29rXFxcXHBhZ2VcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L2V0ZXJubC13aWtpYm9vay9wYWdlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJztcclxuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSc7XHJcbmNvbnNvbGUubG9nKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uZ2l0Ym9vay9hc3NldHMvKiovKicpKVxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgdGFpbHdpbmRjc3MoKSxcclxuICAgIHZpdGVTdGF0aWNDb3B5KHtcclxuICAgICAgdGFyZ2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJy4uLy5naXRib29rL2Fzc2V0cy8qKi8qJywvLyBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLmdpdGJvb2svYXNzZXRzLyoqLyonKSxcclxuICAgICAgICAgIGRlc3Q6ICdnaXRib29rLWFzc2V0cydcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBmczoge1xyXG4gICAgICBhbGxvdzogWycuLiddXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UCxPQUFPLFVBQVU7QUFDOVEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsc0JBQXNCO0FBSi9CLElBQU0sbUNBQW1DO0FBS3pDLFFBQVEsSUFBSSxLQUFLLFFBQVEsa0NBQVcseUJBQXlCLENBQUM7QUFDOUQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osWUFBWTtBQUFBLElBQ1osZUFBZTtBQUFBLE1BQ2IsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLEtBQUs7QUFBQTtBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsT0FBTyxDQUFDLElBQUk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
