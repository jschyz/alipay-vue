<template>
  <div id="page-index">
    <list header="CSS Components">
      <list-item title="Tabbar" is-link to="/tabbar.html"></list-item>
      <list-item title="List" is-link to="/list.html"></list-item>
      <list-item title="Flex.css" is-link to="/flex.html"></list-item>
    </list>

    <list header="JS Components">
      <list-item title="Mint-ui" is-link to="/mint-ui.html"></list-item>
    </list>

    <list header="Advanced">
      <list-item title="Event Bus" value="组件通信" is-link to="/event-bus.html"></list-item>
      <list-item title="Vuex" value="组件通信" is-link to="/vuex.html"></list-item>
    </list>

    <list header="Document">
      <list-item title="Vue" is-link to="https://cn.vuejs.org/">
        <img slot="icon" src="https://vuejs.org/images/logo.png">
      </list-item>
      <list-item title="Vuex" value="状态管理" is-link to="https://vuex.vuejs.org/zh-cn/">
        <img slot="icon" src="https://vuejs.org/images/logo.png">
      </list-item>
      <list-item title="Webpack" value="打包工具" is-link to="http://webpackdoc.com/">
        <img slot="icon" src="https://webpack.js.org/2baa77d6015e6de6adf1ffa247530568.svg">
      </list-item>
      <list-item title="Babel" value="语法编译器" is-link to="http://babeljs.cn/">
        <img slot="icon" src="http://babeljs.cn/favicon-32x32.png">
      </list-item>
      <list-item title="Eslint" value="代码风格" is-link to="https://github.com/Jocs/ESLint_docs">
        <img slot="icon" src="http://eslint.org/img/favicon.512x512.png">
      </list-item>
      <list-item title="Gayhub" value="源码地址" is-link to="https://github.com/Jschyz/alipay-vue">
        <img slot="icon" src="https://github.com/apple-touch-icon-60x60.png">
      </list-item>
    </list>
  </div>
</template>

<script>
  import List from '../../components/list/'
  import ListItem from '../../components/list-item/'

  export default {
    name: 'app',
    components: {
      List,
      ListItem
    }
  }
</script>

<style lang="sass">
</style>
