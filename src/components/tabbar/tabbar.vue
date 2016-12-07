<template>
  <div class="am-tab" :class="{ 'am-fixed': fixed }">
    <slot></slot>
  </div>
</template>

<script>
/**
 * tabbar
 * @module components/tabbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <tabbar :selected.sync="selected">
 *   <tab-item value="订单">
 *     <span slot="label">订单</span>
 *   </tab-item>
 * </tabbar>
 *
 * <tabbar :selected.sync="selected" fixed>
 *   <tab-item :value="['传入数组', '也是可以的']">
 *     <span slot="label">订单</span>
 *   </tab-item>
 * </tabbar>
 *
 */
export default {
  name: 'tabbar',
  props: {
    fixed: Boolean,
    value: {}
  }
}
</script>

<!--
/**
 * am-tab
 * 样式详见：http://am-team.github.io/antui/docs/#Tab%20Bars%20标签栏
 */
-->
