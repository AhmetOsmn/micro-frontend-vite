const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:5000/",
  },
  devServer: {
    port: 5000,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        dashboard: "dashboard@http://localhost:5002/remoteEntry.js",
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
