const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "var",
    library: "EntryPoint",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: ["file-loader", "url-loader?limit=100000"]
      },
      {
        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache|webp)(\?|$)/,
        loader: ["file-loader?name=[name].[ext]", "url-loader?limit=100000"]
      },
      // Rules for Ant-Design
      {
        test: /\.less$/,
        include: [/[\\/]node_modules[\\/].*antd/],
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              strictMath: false,
              sourceMap: true,
              noIeCompat: true,
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin(
    [
      {
        from: './src/assets/manifest.json',
        to: 'assets'
      },
      {
        from: './src/assets/favicon.ico',
        to: 'assets/images'
      },
      {
        from: './src/assets/css/custom.css',
        to: 'assets/css'
      },
      {
        from: './src/assets/images/logo.png',
        to: 'assets/images'
      }
    ])
  ]
};
