const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
 entry: {
     app: './src/index.js'
   },
   plugins: [
    // 每次构建之前清空dist文件
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production'
     })
  ],
  output: {
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