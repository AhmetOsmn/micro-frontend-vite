import { createRequire } from "module";
const require = createRequire(import.meta.url);
const path = require("path");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const devConfig = {
    mode: "development",
    output: {    
      publicPath: "http://localhost:5002/",
    },
    devServer: {
      port: 5002,
      historyApiFallback: true,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "dashboard",
        filename: "remoteEntry.js",
        exposes: {
          "./DashboardPage": "./src/pages/DashboardPage",
        },
        shared: packageJson.dependencies,
      }),
    ],
  };
  
  module.exports = merge(commonConfig, devConfig);
