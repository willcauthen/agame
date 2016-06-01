import Vue from 'vue'
import Stat from 'src/components/stats/Stat'
import action from 'src/components/actions/action'
import store from 'src/vuex/store'

describe('Stat.vue', () => {
  it('stat should create a div for each stat containing the stat name and initializing at 0', () => {
    const vm = new Vue({
      template: '<div><stat></stat></div>',
      components: { Stat, action },
      store
    }).$mount()
    expect(vm.$el.querySelector('div', 3))
    expect(vm.$el.querySelector('.intelligence .stat-name').textContent).to.contain('intelligence')
    expect(vm.$el.querySelector('.strength .stat-name').textContent).to.contain('strength')
    expect(vm.$el.querySelector('.guile .stat-name').textContent).to.contain('guile')
    expect(vm.$el.querySelector('.intelligence .stat-value').textContent).to.contain('0')
    expect(vm.$el.querySelector('.strength .stat-value').textContent).to.contain('0')
    expect(vm.$el.querySelector('.guile .stat-value').textContent).to.contain('0')
  })
})
