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
 * inject global Vue component
 * for example:
 *   Vue.use(component)
 *     Vue.use 会自动阻止注册相同插件多次，届时只会注册一次该插件。
 *   Vue.component(name, options)
 */
import { Swipe, SwipeItem, Lazyload } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(Lazyload)

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
 */
import store from '../../vuex/store'

new Vue({ // eslint-disable-line
  el: '#app',
  store,
  render: h => h(App)
})
