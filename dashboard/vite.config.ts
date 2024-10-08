import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
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
