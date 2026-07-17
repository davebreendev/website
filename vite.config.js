import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    reactRouter(), // This replaces the old React plugin
  ],
  resolve: {
    // If you use absolute imports starting with "~/", we tell Vite to map them
    alias: {
      "~": "/app",
    },
  },
  ssr: {
    // Prevents Vite from bundling better-sqlite3 or Prisma into the server build,
    // leaving them to be resolved natively by Node.js at runtime.
    noExternal: [],
    external: ["better-sqlite3", "@prisma/client"],
  },
  build: {
    rollupOptions: {
      // Keeps the client-side bundler from choking on the native module imports
      external: ["better-sqlite3"],
    },
  },
});