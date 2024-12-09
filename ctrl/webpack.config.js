const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    notApportioned: './raw/js/not-apportioned.js',
  },
  output: {
    filename: 'js/[name].min.js', // Output filenames: js/page1.min.js, js/page2.min.js, ...
    path: path.resolve(__dirname, 'mini'), 
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
      template: './raw/pages/not-apportioned.html',
      filename: 'pages/not-apportioned.html',
      chunks: ['notApportioned']
    }),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
      template: './raw/pages/index.html',
      filename: 'pages/index.html',
    }),
    /*new HtmlWebpackPlugin({
      template: './src/page2.html',
      filename: 'page2.html',
      chunks: ['page2'] // Include the 'page2' bundle in page2.html
    }),*/
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, 
          },
          mangle: true, 
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader', // If you're using Babel for transpiling
        },
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      }
    ],
  },
  /*plugins: [
    new HtmlWebpackPlugin({
      template: './to_minify/pages/raw.html', // Path to your HTML template
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        // Add other minification options as needed
      },
    }),
  ],*/
};