const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // entry: './src/js/slider.js',
  entry: path.resolve(__dirname, 'src', 'js', 'script.js'),
  // output: {
  //   filename: 'main.js'
  // }
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'script.js'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new CssMinimizerPlugin(),
    new TerserPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src', 'img'), to: path.resolve(__dirname, 'dist') }
      ],
    }),
  ],
  // devServer: {
  //   static: {
  //     directory: path.resolve(__dirname, '../dist')
  //   }
  // },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './'),
    },
    open: true,
    hot: true,
    watchFiles: ['src/*/.html'],
  },
  devtool: 'inline-source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
  },
  module: {
    rules: [
      {
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: true,
          }
        }, 'css-loader'],
        test: /\.css$/
      }
    ]
  }
}