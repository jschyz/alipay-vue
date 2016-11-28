<template>
  <tabbar fixed v-model="selected">
    <tab-item
      :id="key"
      v-for="(val, key) of ['推荐', '装饰', '卡通', '文字', '主题']">
      <img v-if="key == 0" slot="icon" src="http://placehold.it/24x24">
      {{val}}
      </tab-item>
  </tabbar>
</template>

<script>
  import Tabbar from '../../components/tabbar/'
  import TabItem from '../../components/tab-item/'

  export default {
    name: 'app',
    data () {
      return {
        selected: 0
      }
    },
    components: {
      Tabbar,
      TabItem
    }
    // data () {
    //   return {
    //     list: [
    //       'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
    //       'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
    //       'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
    //       'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
    //       'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
    //       'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg'
    //     ]
    //   }
    // }
  }
</script>

<style>
.page-progress .mint-cell-value {
  -webkit-box-flex: 2.5;
  -ms-flex: 2.5;
  flex: 2.5;
  position: relative;
  top: -20px
}

.page-progress .mt-progress {
  width: 100%;
  position: absolute;
  top: 5px
}

img {
  width: 100%;
}
</style>
