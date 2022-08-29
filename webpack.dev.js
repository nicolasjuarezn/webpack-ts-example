const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  entry: {
    index: "./src/index/hot.ts",
    error: "./src/error/hot.ts",
  },
  devServer: {
    hot: true,
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".less",
      ".css",
      ".json",
      ".mjs",
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        use: "html-loader",
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[contenthash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|ttf)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[contenthash][ext]",
        },
      },
      {
        test: /\.mp3$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "[name].[contenthash][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index/index.ejs",
        inject: "body",
        chunks: ["index"],
        filename: "index.html",
        meta: {
            "robots": { name: "robots", content: "noindex, nofollow" },
        },
    }),
    new HtmlWebpackPlugin({
        template: "./src/error/error.html",
        inject: "body",
        chunks: ["error"],
        filename: "error.html"
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
  optimization: {
    runtimeChunk: "single",
  },
};
