<template>
  <div id="page-flex">
    <list header="CSS Components" footer="示例">
      <list-item title="Flex" value="全demo" is-link to="http://lzxb.github.io/flex.css/"></list-item>
    </list>
    <div class="demo" flex="dir:left box:first">
      <div style="width:40px;background:#f1d722;">1</div>
      <div style="width:40px;background:#f95656;">2</div>
      <div style="width:40px;background:#5fc383;">3</div>
    </div>
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
