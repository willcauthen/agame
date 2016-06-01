import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  stats: {
    'intelligence': {
      name: 'intelligence',
      level: 1,
      count: 0
    },
    'strength': {
      name: 'strength',
      level: 1,
      count: 0
    },
    'guile': {
      name: 'guile',
      level: 1,
      count: 0
    }
  },

  events: [
    {thing: 'first thing'},
    {thing: 'second thing'}
  ],

  actions:
  [
    {
      affectedStat: 'intelligence',
      text: 'read some books',
      increment: 10
    },
    {
      affectedStat: 'strength',
      text: 'do some push-ups',
      increment: 10
    },
    {
      affectedStat: 'guile',
      text: 'snatch some purses',
      increment: 10
    }
  ]
}

const mutations = {
  INCREMENT (state, action) {
    for (var i = 0; i < state.actions.length; i++) {
      if (action === state.actions[i].affectedStat) {
        var stat = state.actions[i].affectedStat
        console.log(state.actions[i].text)
        state.events.push({thing: state.actions[i].text})
        state.stats[stat].count += state.actions[i].increment
        console.log()
        if (state.stats[stat].count > 99) {
          state.stats[stat].count -= 100
          state.stats[stat].level++
        }
      }
    }
  }
}
export default new Vuex.Store({
  state,
  mutations
})
