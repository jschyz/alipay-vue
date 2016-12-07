<template>
  <div id="page-vuex">
    <product-list></product-list>
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
