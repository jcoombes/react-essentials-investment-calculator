import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const __dirname = path.resolve();

export default defineConfig({
  plugins: [react()],
  root: "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@util": path.resolve(__dirname, "./src/util"),
      "@config": path.resolve(__dirname, "./config"),
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
