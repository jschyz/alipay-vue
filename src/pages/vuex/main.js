import Vue from 'vue'
import App from './App.vue'

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
