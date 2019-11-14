const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // entry: './src/index.js',
  entry: {
        app: './src/index.js',
        print: './src/print.js'
  },
  // 将文件整合到一个html文件中
  plugins: [
        // 每次构建之前清空dist文件
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Output Management'
        })
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
        rules: [
          {
           test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
           },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              'file-loader'
            ]
          },
          {
          test: /\.(csv|tsv)$/,
          use: [
            'csv-loader'
          ]
         },
          {
           test: /\.xml$/,
          use: [
            'xml-loader'
           ]
          }
        ]
  }
};