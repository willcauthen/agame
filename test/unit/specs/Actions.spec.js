import Vue from 'vue'
import Actions from 'src/components/actions/Actions'
import store from 'src/vuex/store'

describe('Actions.vue', () => {
  it('It should render its header', () => {
    const vm = new Vue({
      template: '<div><actions></actions></div>',
      components: { Actions },
      store: store
    }).$mount()
    expect(vm.$el.querySelector('#actions h2').textContent).to.contain('Action Panel')
  })
})
