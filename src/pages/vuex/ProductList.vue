<template>
  <list header="Products">
    <list-item
      v-for="p in products"
      :title="p.title"
      :label="p.price | currency"
      :value="p.inventory"
      :disabled="!p.inventory"
      @click.native="addToCart(p)"></list-item>
  </list>
</template>

<script>
  import List from '../../components/list/'
  import ListItem from '../../components/list-item/'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      List,
      ListItem
    },
    computed: mapGetters({
      products: 'allProducts'
    }),
    methods: mapActions([
      'addToCart'
    ]),
    created () {
      this.$store.dispatch('getAllProducts')
    }
  }
</script>
