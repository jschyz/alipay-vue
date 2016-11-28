<template>
  <a class="am-tab-item"
    @click="$parent.$emit('input', id)"
    :class="{ 'selected': $parent.value === id }">
    <div class="am-tab-item-icon"><slot name="icon"></slot></div>
    <div class="am-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
/**
 * tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <tab-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   订单
 * </tab-item>
 */
export default {
  name: 'tab-item',
  props: ['id']
}
</script>

<style lang="sass">
/**
 * am-tab
 * 样式详见：http://am-team.github.io/antui/docs/#Tab%20Bars%20标签栏
 */
.am-tab:not([am-version]) .am-tab-item {
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}
.am-tab-item-icon {
  width: 16px;
  height: 16px;
  margin: 0 5px 0 0;

  &:empty {
    display: none;
  }
  & > * {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.am-tab-item-label {
  color: inherit;
}
</style>
