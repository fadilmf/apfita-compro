import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    assetsInlineLimit: 0, // Pastikan semua assets tetap sebagai file terpisah
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
