const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const config = require('./config')
const nodeDir = path.resolve(__dirname, '../node_modules')

var entry = {}
var htmlPlugin = []
var invalidEntry = []

fs.readdirSync(config.rule.input).forEach(folder => {
  var dirpath  = path.resolve(config.rule.input, folder)
  var template = path.resolve(dirpath, config.rule.template)
  var script   = path.resolve(dirpath, config.rule.script)

  // 过滤 .DS_Store 非目录文件
  if (!fs.statSync(dirpath).isDirectory()) return

  // 同时必须满足 index.html 跟 main.js 文件
  if (!(fs.existsSync(template) &&
    fs.existsSync(script))) {
    invalidEntry.push(folder)   // 收集无效路劲
  } else {
    entry[folder] = script      // 多脚本入口
  }
})

// 输出无效入口路劲
if (invalidEntry.length) {
  console.log(
    '  Tip:\n' +
    '  下列目录必须包含 index.html、main.js 文件\n  ' +
    invalidEntry.join(`\n  `) +
    '\n'
  )
}

module.exports = {
  entry,
  output: {
    path: config.rule.output,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      vue: path.resolve(nodeDir, 'vue/dist/vue.js'),
      vuex: path.resolve(nodeDir, 'vuex/dist/vuex.js')
    }
  },
  resolveLoader: {
    // https://webpack.js.org/configuration/resolve/#resolveloader-moduleextensions
    moduleExtensions: ['-loader'],
  },
  module: {
    rules: [
      // https://github.com/vuejs/vue-loader/blob/master/docs/en/workflow/linting.md
      {
        enforce: 'pre',
        test: /.(vue|js)$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /.vue$/,
        loader: 'vue'
      },
      {
        test: /.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
}
