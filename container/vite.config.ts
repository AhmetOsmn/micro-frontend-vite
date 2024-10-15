import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        marketing: "http://localhost:5001/assets/remoteEntry.js",
        dashboard: "http://localhost:5002/assets/remoteEntry.js",
        auth: "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: ["react", "react-router-dom", "@mui/material"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
