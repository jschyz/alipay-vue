<template>
  <div id="page-index">
    <list header="CSS Components">
      <list-item title="Tabbar" is-link to="/tabbar.html"></list-item>
      <list-item title="List" is-link to="/list.html"></list-item>
    </list>

    <list header="Advanced">
      <list-item title="组件通信 Event Bus" is-link to="/event-bus.html"></list-item>
      <list-item title="组件通信 Vuex" is-link to="/vuex.html"></list-item>
    </list>

    <list header="Document">
      <list-item title="Vue" is-link to="https://cn.vuejs.org/"></list-item>
      <list-item title="Vuex" value="状态管理" is-link to="https://vuex.vuejs.org/zh-cn/"></list-item>
      <list-item title="Webpack" value="打包工具" is-link to="http://webpackdoc.com/"></list-item>
      <list-item title="Babel" value="语法编译器" is-link to="http://babeljs.cn/"></list-item>
      <list-item title="Eslint" value="代码风格" is-link to="https://github.com/Jocs/ESLint_docs"></list-item>
      <list-item title="Gayhub" value="源码地址" is-link to="https://github.com/Jschyz/alipay-vue"></list-item>
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
