import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import Pages from "vite-plugin-pages";
import viteSSR from "vite-ssr/plugin.js";

export default defineConfig({
  plugins: [
    viteSSR({
      build: {
        keepIndexHtml: true,
      },
    }),
    vue(),
    Pages({
      dirs: "src/views",
      exclude: ["**/components/*.vue"],
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      "/blogApi": {
        target: "https://blogyl.xyz",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
