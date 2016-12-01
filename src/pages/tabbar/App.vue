<template>
  <div id="page-tabbar">
    <tabbar fixed v-model="selected">
      <tab-item
        :id="key"
        v-for="(val, key) of ['标签一', '标签二', '标签三', '标签四', '标签五']">
        {{val}}
        </tab-item>
    </tabbar>

    <list>
      <list-item title="当前选中" :value="selected"></list-item>
    </list>
  </div>
</template>

<script>
  import Tabbar from '../../components/tabbar/'
  import TabItem from '../../components/tab-item/'
  import List from '../../components/list/'
  import ListItem from '../../components/list-item/'

  export default {
    name: 'app',
    data () {
      return {
        selected: 1
      }
    },
    components: {
      Tabbar,
      TabItem,
      List,
      ListItem
    }
  }
</script>

<style lang="sass">
body {
  padding-top: .42rem;
}
</style>
