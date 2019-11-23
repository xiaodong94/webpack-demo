const webpack = require('webpack');
const merge = require('webpack-merge');
//一个能够删除未引用代码(dead code)的压缩工具(minifier)
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});