const path = require('path');
// 多个入口生成统一的html文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 每次打包，清空dist文件夹
const  {CleanWebpackPlugin} = require('clean-webpack-plugin')

const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
  // 资源加载的学习
  //entry: './src/indexaddresource.js',

  // 输出管理的学习
  entry: {
    app: './src/index.js',
    //print: './src/print.js'
  },
  // 将第三方库单独打包出去
  entry:{
    main:'./src/index.js',
    vendor:[
      'lodash'
    ]
  },
  // dist生成一个html文件
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    // 模块热加载
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    // 防止第三方的文件每次打包都生成一个新的vendor的hash值
    new webpack.HashedModuleIdsPlugin(), 
    // 将第三方模块单独打包出来
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),
    // 防止重复打包的模块
    new webpack.optimize.CommonsChunkPlugin({
       name: 'common' // 指定公共 bundle 的名称。
    }),
   
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    //  懒加载
    chunkFilename:'[name].bundle.js',//决定非入口chunk的名称
    // 缓存，使用一个hashname
    //filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  mode:"production",
  devServer: {
    contentBase: path.resolve(__dirname),
    // contentBase: './dist',
    compress: true,
    port: 9000,
    hot:true
  },
  // 追踪到警告和错误在源代码的位置
  devtool: 'inline-source-map',
  module:{
    rules:[
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
          // 压缩图片
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ]
      },
      // 文字
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            'file-loader'
        ]
      },
      // csv ,xml
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
  },

};