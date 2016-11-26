const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

let htmlPlugin = []
// 多页面入口
Object.keys(baseWebpackConfig.entry).forEach((key) => {
  htmlPlugin.push(
    new HtmlWebpackPlugin({
      chunks: ['vendor', key],
      filename: `${key}.html`,
      template: `src/pages/${key}/index.html`
    })
  )
})

module.exports = merge(baseWebpackConfig, {
  entry: {
    vendor: ['vue']
  },
  output: {
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'vendor.js'
    // })
  ].concat(htmlPlugin)
})
