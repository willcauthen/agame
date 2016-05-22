import Vue from 'vue'
import Stat from 'src/components/stats/Stat'

describe('Stat.vue', () => {
  it('It should render its header', () => {
    const vm = new Vue({
      template: '<div><stat></stat></div>',
      components: { Stat }
    }).$mount()
    expect(vm.$el.querySelector('.stat-name').textContent).to.contain('simple stat')
    expect(vm.$el.querySelector('.stat-value').textContent).to.contain('10')
  })
})
