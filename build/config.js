const path = require('path')

module.exports = {
  // 约定页面入口跟脚本入口
  // 入口页面需含有 index.html main.js
  entry: path.resolve(__dirname, '../src/pages'),
  // 支付宝小程序约定输出目录 dist
  output: path.resolve(__dirname, '../dist'),
  build: {},
  dev: {
    env: '"development"',
    port: 8989,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
  }
}
