import Vue from 'vue'
import App from './App.vue'

/**
 * inject global Vue filter or directive
 * for example:
 *   import '../../directives/'
 *   import '../../filters/'
 *
 *  Here，Coded directive
 */

/**
 * inject global Css component
 * for example:
 *   import 'flex.css/dist/flex.css'
 */

/**
 * inject global Vue component
 * for example:
 *   Vue.use(component)
 *     Vue.use 会自动阻止注册相同插件多次，届时只会注册一次该插件。
 *   Vue.component(name, options)
 */

/**
 * 简易情况组件通信（数据状态管理）
 * event hub
 * https://cn.vuejs.org/v2/guide/migration.html#dispatch-和-broadcast-替换
 * 将在各处使用该事件中心
 * 组件通过它来通信
 * for example:
 *   var eventHub = new Vue()
 */

/**
 * 复杂情况组件通信（数据状态管理）
 * Using vuex building large projects
 * 学习成本：
 *   半天消化 https://vuex.vuejs.org/zh-cn/
 * 使用范例样板：
 *   https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart
 * for example:
 *   import store from '../../vuex/store'
 */

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
})
