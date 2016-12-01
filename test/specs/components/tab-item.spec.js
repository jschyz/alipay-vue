import tabItem from 'components/tab-item'
Vue.config.devtools = false
describe('tabItem.vue', () => {
  const vm = new Vue({
    data () {
      return {
        id: 0,
        value: 0
      }
    },
    template: '<div><tab-item :id="this.id"><img slot="icon" src="http://placehold.it/100x100"><img src="http://placehold.it/100x100"></tab-item></div>',
    components: {
      tabItem
    }
  }).$mount()
  const tabItemEl = vm.$el.querySelector('a')

  it('should slot icon', () => {
    expect(tabItemEl.querySelector('.am-tab-item-icon img')).to.not.be.null
  })

  it('should slot default', () => {
    expect(tabItemEl.querySelector('.am-tab-item-label img')).to.not.be.null
  })

  it('should selected', () => {
    Array.prototype.slice.apply(tabItemEl.classList).should.contain('selected')
  })

  it('should not selected', done => {
    vm.value = 1
    setTimeout(function () {
      Array.prototype.slice.apply(tabItemEl.classList).should.not.contain('selected')
      done()
    })
  })

  it('should event emit', done => {
    vm.$on('input', id => {
      id.should.eq(0)
      done()
    })
    tabItemEl.click()
  })
})
