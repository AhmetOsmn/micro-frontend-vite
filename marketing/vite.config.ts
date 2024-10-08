import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import packageJson from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./LandingPage": "./src/Pages/LandingPage",
        "./PricingPage": "./src/Pages/PricingPage",
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
