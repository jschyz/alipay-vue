const baseWebpackConfig = require('./build/webpack.base.conf')
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = function (config) {
  config.set({
    // ... normal karma configuration
    files: [
      // all files ending in "_test"
      {
        pattern: 'test/specs/**/*.js',
        watched: false
      },
      // each file acts as entry point for the webpack configuration
    ],

    reporters: ['mocha'],

    // frameworks to use
    frameworks: ['mocha','chai'],

    preprocessors: {
      // add webpack as preprocessor
      'test/specs/**/*.js': ['webpack']
    },

    webpack: merge(baseWebpackConfig, {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
      devtool: 'inline-source-map',
      resolve: {
        //设置别名
        alias: {
          'components':'../../../src/components'
        }
      },
      plugins:[
         //方便全局使用
        new webpack.ProvidePlugin({
            "Vue": "vue/dist/vue.js"
        })
      ]
    }),

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  });
};
