import { createRequire } from "module";
const require = createRequire(import.meta.url);
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
  entry: './src/main.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
