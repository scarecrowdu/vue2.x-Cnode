var config = require('./config');

var path = require('path');
var express = require("express");
var httpProxy = require("http-proxy");
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var proxy = require('http-proxy-middleware');
var webpackConfig = require("./webpack.dev.conf");

var opn = require('opn')

var app = express();
var apiProxy = httpProxy.createProxyServer();
var compiler = webpack(webpackConfig);
var devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})
var hotMiddleware = webpackHotMiddleware(compiler)

app.use(devMiddleware);
app.use(hotMiddleware);

var publicPath = path.resolve(__dirname, '..');
// We point to our static assets
app.use(express.static(publicPath));

//Proxy api requests
app.use("/*", function(req, res) {
  req.url = req.baseUrl; // Janky hack...
  if(config.dev.proxyTable.target){
    apiProxy.web(req, res, {
      target: config.dev.proxyTable.target,
      changeOrigin: true,    // for vhosted sites, changes host header to match to target's host
      logLevel: 'debug'
    });
  }
});

var port = config.dev.port
var uri = 'http://localhost:' + port

app.listen(port, function(err){

    console.log('正在运行开发环境')
    console.log('> Listening at ' + uri + '\n')

    if (err) {
      console.log(err)
      return
    }
    
    opn(uri)
    
});
