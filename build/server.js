var path = require('path')
var chalk = require('chalk')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./config')
var webpackConfig = require('./webpack.dev.conf')

var port = process.env.PORT || config.dev.port
var proxy = config.dev.proxy

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.dev.path
})

var hotMiddleware = webpackHotMiddleware(compiler)

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

Object.keys(proxy).forEach(function (context) {
  var options = proxy[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

app.use(devMiddleware)
app.use(hotMiddleware)

app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log(chalk.blue(' # Access URLs:'))
  console.log(chalk.gray(' ----------------------------------------'))
  console.log('     Local: ' + chalk.green('http://localhost:' + port + config.dev.path))
  console.log(chalk.gray(' ----------------------------------------'))
  console.log('')
})
