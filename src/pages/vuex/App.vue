<template>
  <div id="page-vuex">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>

<script>
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
