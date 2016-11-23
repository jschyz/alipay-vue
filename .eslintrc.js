module.exports = {
  root: true,
  // https://github.com/babel/babel-eslint#setup
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  // https://github.com/BenoitZugmeyer/eslint-plugin-html
  plugins: [
    'html'
  ],
  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    'browser': true
  },
  // http://eslint.org/docs/user-guide/configuring#specifying-globals
  globals: {},
  // add your custom rules here
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0
  }
}
