var config = require('./config');

var path = require('path');  //path 模块
var webpack = require('webpack');  //webpack 核心
var utils = require('./utils')
var ExtractTextPlugin = require("extract-text-webpack-plugin");   //独立样式文件
var env = process.env.NODE_ENV

module.exports = {
    
    // 入口文件
    entry: "./src/main.js", // string | object | array
    
    // 输出文件
    output: {
        // webpack 如何输出结果的相关选项
        // // 所有输出文件的目标路径，必须是绝对路径（使用 Node.js 的 path 模块）
        // path: path.resolve(__dirname, "static/"), // string
        // // 输出解析文件的目录，url 相对于 HTML 页面
        // publicPath: "/static/", // string
        // //「入口分块(entry chunk)」的文件名模板（出口分块？）
        // filename: "bundle.js", // string
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    
    // 关于模块配置
    module: {
         //加载器配置
         loaders: [
            // .vue文件 
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // 打包引入样式
            {
                test: /\.css$/,
                // loader: "css-loader?sourceMap!cssnext-loader"
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!cssnext-loader")
            },
            // scss文件编译 
            {
                test: /\.scss$/,
                // loader: "css-loader?sourceMap!sass-loader!cssnext-loader"
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader!cssnext-loader")
            }, 
            // 使用babel,编译ES6语法
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            },
            // 内联 base64 URLs, 限定 <=10k 的图片, 其他的用 URL
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: process.env.NODE_ENV === 'production' ? '/img/[name].[hash:7].[ext]' : 'img/[name].[hash:7].[ext]'
                }
            }
         ]
    },

    vue: {
        loaders: utils.cssLoaders({ sourceMap: false }),
        postcss: [
        require('autoprefixer')({
            browsers: ['last 2 versions']
        })
        ]
    },
    
    // 附加插件列表
    plugins: [
    ],

    // 解析模块请求的选项
    resolve: {
        // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名,require('file') 代替 require('file.js')
        extensions: ['', '.js', '.vue', '.coffee','.json'],
         // 模块别名列表
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },

    stats: {
        // 增加错误信息
        errors: true,
        // 增加错误的详细信息（就像解析日志一样）
        errorDetails: true,
        // 增加 publicPath 的信息
        publicPath: true,
        // 增加提示
        warnings: true
    }

}

