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
    sourcemap: true, // optional, matikan jika masih muncul warning sourcemap
    rollupOptions: {
      input: {
        main: "index.html",
      },
      output: {
        manualChunks: {
          // Pisahkan vendor umum
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
          lucide: ["lucide-react"],
          router: ["react-router-dom"],
          // Tambahkan lain jika kamu pakai library besar lain (misal shadcn/ui, zustand, dsb)
        },
      },
    },
  },
});
