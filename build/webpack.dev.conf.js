var config = require('./config');

var webpack = require('webpack');
var merge = require('webpack-merge');
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrors = require('friendly-errors-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");   //独立样式文件
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin; //检测重用模块

module.exports = merge(baseWebpackConfig, {
  module: {
    // loaders: utils.styleLoaders({ sourceMap: false })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [

    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),

    //会将所有的样式文件打包成一个单独的style.css
    new ExtractTextPlugin("style.css", {
        disable: false ,
        allChunks: true  //所有独立样式打包成一个css文件
    }),
      //自动分析重用的模块并且打包成单独的文件
    new CommonsChunkPlugin("vendor.js"),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.tpl',
      inject: true
    }),
    new FriendlyErrors()
  ]
})


