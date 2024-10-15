import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./LandingPage": "./src/pages/LandingPage",
        "./PricingPage": "./src/pages/PricingPage",
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
