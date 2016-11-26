const path = require('path')

module.exports = {
  /**
   * 约定:
   * 页面入口  /index.html
   * 入口页面  /main.js
   * - 输出目录必须为 dist, 不可更改
   */
  rule: {
    template: 'index.html',
    script: 'main.js',
    input: path.resolve(__dirname, '../src/pages'),
    output: path.resolve(__dirname, '../dist')
  },
  build: {
    env: '"production"',
  },
  dev: {
    env: '"development"',
    port: 8989,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
  }
}
