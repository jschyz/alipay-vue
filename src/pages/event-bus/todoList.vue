<template>
  <list header="Todo List">
    <list-item :title="val" value="x" v-for="(val, key) in items" @click.native="rm(key)"></list-item>
  </list>
</template>

<script>
  import Bus from './bus'
  import List from '../../components/list/'
  import ListItem from '../../components/list-item/'

  export default {
    name: 'todoList',
    data () {
      return {
        items: []
      }
    },
    components: {
      List,
      ListItem
    },
    methods: {
      rm (i) {
        this.items.splice(i, 1)
      }
    },
    beforeCreate () {
      Bus.$on('newtodo', text => {
        this.items.push(text)
      })
    },
    beforeDestory () {
      Bus.$off('newtodo')
    }
  }
</script>
