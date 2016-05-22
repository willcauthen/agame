import Vue from 'vue'
import Log from 'src/components/logs/Log'

describe('log.vue', () => {
  it('It should render its header', () => {
    const vm = new Vue({
      template: '<div><log></log></div>',
      components: { Log }
    }).$mount()
    expect(vm.$el.querySelector('.log-header').textContent).to.contain('Log Panel')
  })
})
