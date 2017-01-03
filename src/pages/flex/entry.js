import Vue from 'vue'
import App from './App.vue'
import 'utils/devtools'

/**
 * inject global Css component
 * for example:
 *   import 'flex.css/dist/flex.css'
 */
import 'flex.css/dist/flex.css'

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
})
