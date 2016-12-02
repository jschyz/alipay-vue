import Vue from 'vue'
import App from './App.vue'

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
 * 示例见 bus.js
 * 不足：消息容易重名
 * 为了减少消息越来越多，导致消息重名，应该根据不同的通信范围，依赖独立的消息中心，各自管理各自的消息，减少影响范围。
 * 保持良好的团队命名规范，避免冲突，因为所有事件代码都保留在各个组件内部，发生冲突很难 debug。
 */

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
})
