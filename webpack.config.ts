import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
const CopyPlugin = require("copy-webpack-plugin");


type Mode = "development" | "production";

interface EnvVariables {
  mode: Mode;
  port: number;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === "development" ? true : false;
  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "scripts/[name][contenthash:4].js",
      assetModuleFilename: 'images/[name][hash:4][ext][query]',
      clean: true,
    },

    devServer: {
      port: env.port ?? 3000,
      open: true,
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|jpeg|svg)$/i,
          type: 'asset/resource'
        }
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
      }),
      new MiniCssExtractPlugin({
          filename: "css/[name][contenthash:8].css",
          chunkFilename: "css/[name][contenthash:8].css",
        }),
        new CopyPlugin({
          patterns: [
            { from: "src/public/logo.svg", to: "images" },
          ],
        }),
        
    ].filter(Boolean),
  };
  return config;
};
