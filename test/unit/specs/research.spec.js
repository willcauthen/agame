import Vue from 'vue'
import Stat from 'src/components/stats/Stat'
import research from 'src/components/actions/research'
import store from 'src/vuex/store'

describe('research.vue', () => {
  it('research should contain 3 buttons, each with a class name to their stat', () => {
    const vm = new Vue({
      template: '<div><research></research></div>',
      components: { Stat, research },
      store
    }).$mount()
    expect(vm.$el.querySelector('button.intelligence')).to.be.ok
    expect(vm.$el.querySelector('button.strength')).to.be.ok
    expect(vm.$el.querySelector('button.guile')).to.be.ok
    vm.$el.querySelector('button.intelligence').click()
    // Vue.nextTick(function () {
    //   expect(vm.$el.querySelector('.intelligence .stat-value').textContent).to.contain('1')
    // })
  })
})
