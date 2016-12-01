<template>
  <list header="Cart">
    <list-item
      v-for="p in products"
      :title="p.title"
      :label="p.quantity"
      :value="p.price * p.quantity | currency"></list-item>
    <list-item title="- Total -" :value="total | currency"></list-item>

    <p>
      <button :disabled="!products.length" @click="checkout(products)">Checkout</button>
    </p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </list>
</template>

<script>
  import List from '../../components/list/'
  import ListItem from '../../components/list-item/'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      List,
      ListItem
    },
    computed: {
      ...mapGetters({
        products: 'cartProducts',
        checkoutStatus: 'checkoutStatus'
      }),
      total () {
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      }
    },
    methods: {
      checkout (products) {
        this.$store.dispatch('checkout', products)
      }
    }
  }
</script>
