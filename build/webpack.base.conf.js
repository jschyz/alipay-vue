const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')

let entry = {}
let htmlPlugin = []
let invalidEntry = []

fs.readdirSync(config.entry).forEach(name => {
  let dirpath = path.resolve(config.entry, name)

  // 过滤 .DS_Store 非目录文件
  if (!fs.statSync(dirpath).isDirectory()) return;

  // 同时必须满足 index.html 跟 main.js 文件
  if (!(fs.existsSync(path.resolve(dirpath, 'index.html')) && fs.existsSync(path.resolve(dirpath, 'main.js')))) {
    invalidEntry.push(name)
    return
  }

  // 多脚本入口
  entry[name] = dirpath + '/main.js'
  // 多页面入口
  htmlPlugin.push(
    new HtmlWebpackPlugin({
      chunks: [name],
      filename: `${name}.html`,
      template: `src/pages/${name}/index.html`
    })
  )
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
    path: config.output,
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
  },
  plugins: htmlPlugin
}
