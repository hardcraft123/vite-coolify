import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  base: "/", // IMPORTANT for Coolify

  build: {
    outDir: "dist",       // Coolify deploys this folder
    emptyOutDir: true,    // Clears old build files
  },
}));
