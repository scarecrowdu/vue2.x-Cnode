var path = require('path')

module.exports = {
  build: {
    env: { NODE_ENV: '"production"' },
    index: path.resolve(__dirname, '../dist/index.html'),
    path: path.resolve(__dirname,"../dist/static/"),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './static',  //设置资源文件路径
    productionSourceMap: true,
  },
  dev: {
    env: { NODE_ENV: '"development"' },
    port: 9090,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        target: ''
        // target: 'http://115.29.245.211:8181
    },
    cssSourceMap: false
  }
}


