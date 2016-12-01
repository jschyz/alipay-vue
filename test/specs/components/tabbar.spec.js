import tabbar from 'components/tabbar'
Vue.config.devtools = false
describe('tabbar.vue', () => {
  const vm = new Vue({
    data () {
      return {
        fixed: true
      }
    },
    template: '<div><tabbar :fixed="fixed"><span>订单</span></tabbar></div>',
    components: {
      tabbar
    }
  }).$mount()
  const tabbarEl = vm.$el.querySelector('.am-tab')

  it('should slot default', () => {
    expect(tabbarEl.querySelector('span')).to.not.be.null
  })

  it('should am-fixed', () => {
    Array.prototype.slice.apply(tabbarEl.classList).should.contain('am-fixed')
  })

  it('should not am-fixed', done => {
    vm.fixed = false
    setTimeout(function () {
      Array.prototype.slice.apply(tabbarEl.classList).should.not.contain('am-fixed')
      done()
    })
  })
})
