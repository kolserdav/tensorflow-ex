// @ts-check

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const { NODE_ENV, PORT } = env;
  return {
    mode: NODE_ENV,
    entry: {
      main: "./src/js/index.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(scss|css)$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "static"),
      },
      compress: true,
      port: PORT || 3000,
    },
  };
};
