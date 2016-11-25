import Vue from 'vue'
import App from './App.vue'
import { Progress, Cell, Lazyload } from 'mint-ui'

Vue.component(Cell.name, Cell)
Vue.component(Progress.name, Progress)
Vue.use(Lazyload)

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
})
