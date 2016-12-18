const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./config')
const baseWebpackConfig = require('./webpack.base.conf')

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['webpack-hot-middleware/client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: config.dev.env
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
})
