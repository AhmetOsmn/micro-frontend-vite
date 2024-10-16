const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/dashboard/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardPage": "./src/pages/DashboardPage",
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          singleton: true,
          eager: false,
          requiredVersion: false,
        },
        "react-dom": {
          singleton: true,
          eager: false,
          requiredVersion: false,
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
