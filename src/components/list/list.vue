<template>
  <div class="am-list">
    <div class="am-list-header" v-if="hasEmpty(header)" v-text="header" v-once></div>

    <div class="am-list-body">
      <slot></slot>
    </div>

    <div class="am-list-footer" v-if="hasEmpty(footer)" v-text="footer" v-once></div>
  </div>
</template>

<script>
/**
 * list
 * @module components/list
 * @param {string} [header] - 表头
 * @param {string} [footer] - 表尾
 *
 * 使用 v-if, 而不用CSS :empty，
 * 原因：减少DOM节点
 *
 * @example
 * <list header="表头文字" footer="表尾文字">
 */
export default {
  name: 'list',
  props: {
    header: String,
    footer: String
  },
  methods: {
    hasEmpty (value) {
      return !(value === undefined || value.trim() === '')
    }
  }
}
</script>

<style lang="sass">
/**
 * am-list
 * 样式详见：http://am-team.github.io/antui/docs/#List%20列表
 */
</style>
