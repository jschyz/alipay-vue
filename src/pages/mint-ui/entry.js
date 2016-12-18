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
// lazyload 文档
// https://github.com/hilongjw/vue-lazyload
Vue.use(Lazyload, {
  preLoad: 1.3,
  loading: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSI+CiAgPHBhdGggb3BhY2l0eT0iLjI1IiBkPSJNMTYgMCBBMTYgMTYgMCAwIDAgMTYgMzIgQTE2IDE2IDAgMCAwIDE2IDAgTTE2IDQgQTEyIDEyIDAgMCAxIDE2IDI4IEExMiAxMiAwIDAgMSAxNiA0Ii8+CiAgPHBhdGggZD0iTTE2IDAgQTE2IDE2IDAgMCAxIDMyIDE2IEwyOCAxNiBBMTIgMTIgMCAwIDAgMTYgNHoiPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMTYgMTYiIHRvPSIzNjAgMTYgMTYiIGR1cj0iMC44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgo8L3N2Zz4K',
  attempt: 1
})

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
})
