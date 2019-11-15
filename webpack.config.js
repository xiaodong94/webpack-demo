const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  mode: "production",
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
        }),
        // 便于更容易查看要修补的依赖
        new webpack.NamedModulesPlugin(),
        // 热更新
        new webpack.HotModuleReplacementPlugin()
  ],
  // a.js b.js c.js整合到bundle.js,方便定位是哪一个打包的
  devtool: 'inline-source-map',
  // webpack-server:告知webpack-dev-server,在localhost:8080下建立
  // 服务,将dist目录下的文件，作为可访问文件。
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath也会在服务器脚本中用到，以确保文件资源能够在http://localhost:3000下正常访问，

    publicPath: '/'
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