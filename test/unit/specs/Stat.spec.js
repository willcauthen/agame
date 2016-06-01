import Vue from 'vue'
import Stat from 'src/components/stats/Stat'
import action from 'src/components/actions/action'
import store from 'src/vuex/store'

describe('Stat.vue', () => {
  it('Simple stat should start at 0, and be incremented when button clicked', () => {
    const vm = new Vue({
      template: '<div><action></action><stat></stat></div>',
      components: { Stat, action },
      store
    }).$mount()
    expect(vm.$el.querySelector('.stat-name').textContent).to.contain('intelligence')
    expect(vm.$el.querySelector('.stat-value').textContent).to.contain('0')
    vm.$el.querySelector('.statBtn').click()
    Vue.nextTick(function () {
      expect(vm.$el.querySelector('.stat-value').textContent).to.contain('1')
    })
  })
})
