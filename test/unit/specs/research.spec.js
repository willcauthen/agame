import Vue from 'vue'
import Stat from 'src/components/stats/Stat'
import research from 'src/components/actions/research'
import store from 'src/vuex/store'

describe('research.vue', () => {
  it('research should contain 3 buttons, each with a class name to their stat, each should increment that stat, and each should append a message to events', () => {
    const vm = new Vue({
      template: '<div><research></research></div>',
      components: { Stat, research },
      store
    }).$mount()
    expect(vm.$el.querySelector('button.intelligence')).to.be.ok
    expect(vm.$el.querySelector('button.strength')).to.be.ok
    expect(vm.$el.querySelector('button.guile')).to.be.ok
    // each button should increment it's stat and append to log events
    // intelligence   (should always be spelled with two 'l's)
    expect(store.state.stats.intelligence.count).to.equal(0)
    vm.$el.querySelector('button.intelligence').click()
    expect(store.state.stats.intelligence.count).to.not.equal(0)
    expect(store.state.events.pop().thing).to.equal('read some books')
    // strength
    expect(store.state.stats.strength.count).to.equal(0)
    vm.$el.querySelector('button.strength').click()
    expect(store.state.stats.strength.count).to.not.equal(0)
    expect(store.state.events.pop().thing).to.equal('do some push-ups')
    // guile
    expect(store.state.stats.guile.count).to.equal(0)
    vm.$el.querySelector('button.guile').click()
    expect(store.state.stats.guile.count).to.not.equal(0)
    expect(store.state.events.pop().thing).to.equal('snatch some purses')
  })
})
