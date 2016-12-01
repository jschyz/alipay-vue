<template>
  <div id="page-index">
    <tabbar fixed v-model="selected">
      <tab-item
        :id="key"
        v-for="(val, key) of ['推荐', '装饰', '卡通', '文字', '主题']">
        {{val}}
        </tab-item>
    </tabbar>

    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>

<script>
  import Tabbar from '../../components/tabbar/'
  import TabItem from '../../components/tab-item/'
  import ProductList from './ProductList.vue'
  import Cart from './Cart.vue'

  export default {
    name: 'app',
    data () {
      return {
        selected: 0
      }
    },
    components: {
      Tabbar,
      TabItem,
      ProductList,
      Cart
    }
  }
</script>

<style lang="sass">
body {
  padding-top: .42rem;
}
</style>
