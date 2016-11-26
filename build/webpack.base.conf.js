const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const config = require('./config')

let entry = {}
let htmlPlugin = []
let invalidEntry = []

fs.readdirSync(config.rule.input).forEach(name => {
  let dirpath = path.resolve(config.rule.input, name)

  // 过滤 .DS_Store 非目录文件
  if (!fs.statSync(dirpath).isDirectory()) return

  let template = path.resolve(dirpath, config.rule.template)
  let script = path.resolve(dirpath, config.rule.script)
  // 同时必须满足 index.html 跟 main.js 文件
  if (!(fs.existsSync(template) &&
    fs.existsSync(script))) {
    // 收集无效路劲
    invalidEntry.push(name)
  } else {
    // 多脚本入口
    entry[name] = script
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
  module: {
    rules: [
      // https://github.com/vuejs/vue-loader/blob/master/docs/en/workflow/linting.md
      {
        enforce: 'pre',
        test: /.(vue|js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
}
