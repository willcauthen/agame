import Vue from 'vue'
import Actions from 'src/components/actions/Actions'

describe('Actions.vue', () => {
  it('It should render its header', () => {
    const vm = new Vue({
      template: '<div><actions></actions></div>',
      components: { Actions }
    }).$mount()
    expect(vm.$el.querySelector('#actions h2').textContent).to.contain('Action Panel')
  })
})
