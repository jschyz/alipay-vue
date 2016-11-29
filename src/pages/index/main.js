import Vue from 'vue'
import App from './App.vue'

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
 * inject global Vue filter or directive
 * for example:
 *   import '../../directives/'
 *   import '../../filters/'
 *
 *  Here，Coded directive
 */

/**
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
