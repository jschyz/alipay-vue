import Vue from 'vue'
import App from './App.vue'

Vue.filter('currency', (value, currency, decimals) => {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(/(\d{3})(?=\d)/g, '$1,') +
    _float
})

/**
 * 复杂情况组件通信（数据状态管理）
 * Using vuex building large projects
 * 学习成本：
 *   半天消化 https://vuex.vuejs.org/zh-cn/
 * 使用范例样板：
 *   https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart
 */
import store from '../../vuex/store'

new Vue({ // eslint-disable-line
  el: '#app',
  store,
  render: h => h(App)
})
