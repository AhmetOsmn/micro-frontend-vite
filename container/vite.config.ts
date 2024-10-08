import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import packageJson from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        marketing: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
