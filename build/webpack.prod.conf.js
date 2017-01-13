const webpack = require('webpack')
const merge = require('webpack-merge')
const px2rem = require('postcss-px2rem')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
  output: {
    filename: 'js/[name].[chunkhash:7].js',
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue',
        exclude: /node_modules/,
        options: {
          loaders: {
            sass: ExtractTextPlugin.extract({
              loader: 'css!sass',
              fallbackLoader: 'vue-style'
            })
          },
          postcss: [
            autoprefixer({ browsers: ['last 7 versions'] }),
            // px2rem({
            //   remUnit: 75
            // })
          ]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: config.build.env
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ExtractTextPlugin('css/[name]-[contenthash:7].css')
  ]
})
