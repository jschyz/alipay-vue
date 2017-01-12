const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const px2rem = require('postcss-px2rem')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')

var entry = {}
var htmlPlugin = []
var invalidEntry = []

fs.readdirSync(config.rule.input).forEach(folder => {
  var dirpath  = path.resolve(config.rule.input, folder)
  var template = path.resolve(dirpath, config.rule.template)
  var script   = path.resolve(dirpath, config.rule.script)

  // 过滤 .DS_Store 非目录文件
  if (!fs.statSync(dirpath).isDirectory()) return

  // 同时必须满足 index.html 跟 entry.js 文件
  if (!(fs.existsSync(template) &&
    fs.existsSync(script))) {
    invalidEntry.push(folder)   // 收集无效路劲
  } else {
    entry[folder] = script      // 多脚本入口
    htmlPlugin.push(
      new HtmlWebpackPlugin({
        chunks: [folder],
        filename: `${folder}.html`,
        template: path.join(config.rule.input, folder, config.rule.template)
      })
    )
  }
})

// 输出无效入口路劲
if (invalidEntry.length) {
  console.log(
    '  Tip:\n' +
    '  下列目录必须包含 index.entry.js 文件\n  ' +
    invalidEntry.join(`\n  `) +
    '\n'
  )
}

module.exports = {
  entry,
  output: {
    path: config.rule.output,
    filename: '[name].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'vue': 'vue/dist/vue.js',
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'pages': path.resolve(__dirname, '../src/pages'),
      'utils': path.resolve(__dirname, '../src/utils')
    }
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(vue|js)$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /.vue$/,
        loader: 'vue',
        exclude: /node_modules/,
        options: {
          postcss: [
            autoprefixer({ browsers: ['last 7 versions'] }),
            // 建议不开启
            // px2rem({
            //   remUnit: 75
            // })
          ]
        }
      },
      {
        test: /.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 4000, // 4kb
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 1,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  externals: {
    vue: 'Vue'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
  ].concat(htmlPlugin)
}
