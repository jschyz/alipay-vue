<template>
  <div class="page-progress">
    <div class="am-tab">
      <button class="am-tab-item selected">标签栏1</button>
      <button class="am-tab-item">标签栏2</button>
      <button class="am-tab-item">标签栏3</button>
    </div>
    <mt-cell title="Progress">
      <mt-progress :value="20" :bar-height="5"></mt-progress>
    </mt-cell>
    <div id="container">
      <ul>
        <li v-for="item in list">
          <img v-lazy.container="item">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        list: [
          'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
          'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
          'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
          'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
          'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
          'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg'
        ]
      }
    }
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
