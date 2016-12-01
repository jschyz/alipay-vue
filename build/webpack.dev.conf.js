const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')
const baseWebpackConfig = require('./webpack.base.conf')


var htmlPlugin = []
// 多页面入口
Object.keys(baseWebpackConfig.entry).forEach((key) => {
  htmlPlugin.push(
    new HtmlWebpackPlugin({
      chunks: [key],
      filename: `${key}.html`,
      template: path.join(config.rule.input, key, config.rule.template)
    })
  )
})

module.exports = merge(baseWebpackConfig, {
  // eval-source-map is faster for development
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: {
        // use custom postcss plugins
        postcss: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      }
    })
  ].concat(htmlPlugin)
})
