import Vue from 'vue'
import Stats from 'src/components/stats/Stats'
import store from 'src/vuex/store'

describe('Stats.vue', () => {
  it('It should render its header', () => {
    const vm = new Vue({
      template: '<div><Stats></Stats></div>',
      components: { Stats },
      store
    }).$mount()
    expect(vm.$el.querySelector('.stats-header').textContent).to.contain('Status')
  })
})
