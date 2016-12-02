<template>
  <div class="am-search am-input-autoclear">
    <div class="am-search-input" for>
      <input class="am-search-value" type="text" v-model="newtodo" ref="input">
      <div class="am-search-clear">
        <i class="am-icon-clear am-icon clear-tiny"></i>
      </div>
    </div>
    <button type="button" class="am-search-button" @click="add">添加</button>
  </div>
</template>

<script>
  import Bus from './bus'

  export default {
    name: 'newTodo',
    data () {
      return {
        newtodo: ''
      }
    },
    methods: {
      add () {
        Bus.$emit('newtodo', this.newtodo)
        this.newtodo = ''
        this.$refs.input.focus()
      }
    }
  }
</script>

<style>
  .am-search:not([am-version]):before {
    content: none;
  }
  .am-search:not([am-version]) .am-search-input input {
    padding: 0 10px;
  }
  .am-search:not([am-version]) .am-search-button {
    display: block;
  }
</style>
