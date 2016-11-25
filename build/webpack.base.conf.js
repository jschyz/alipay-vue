const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

// 定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname, '../')

module.exports = {
  // foreach
  entry: './src/pages/index/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
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
      }
    ]
  },
  // 代码合并以后，用于排错和定位
  // 不要使用 eval-source-map，运行性能低
  devtool: 'source-map',
  plugins: [
    //会自动生成一个html文件
    new HtmlwebpackPlugin({
      template: 'src/pages/index/index.html'
    })
  ]
}
