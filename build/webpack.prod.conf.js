const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')
const baseWebpackConfig = require('./webpack.base.conf')

var htmlPlugin = []
// 多页面入口
Object.keys(baseWebpackConfig.entry).forEach((key) => {
  htmlPlugin.push(
    new HtmlWebpackPlugin({
      chunks: [key],
      filename: `${key}.html`,
      template: path.join(config.rule.input, key, config.rule.template),
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  )
})

module.exports = merge(baseWebpackConfig, {
  output: {
    filename: '[name].[chunkhash:8].js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name]-[contenthash:8].css')
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'vendor.js'
    // })
  ].concat(htmlPlugin)
})
