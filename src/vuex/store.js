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

  events: [],

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
        state.events.push({thing: state.actions[i].text})
        state.stats[stat].count += state.actions[i].increment
        if (state.stats[stat].count > 99) {
          state.stats[stat].count -= 100
          state.stats[stat].level++
          state.events.push({thing: 'LEVELED UP YOUR ' + stat.toUpperCase()})
        }
      }
    }
    if (state.events.length > 10) {
      var x = state.events.length - 10
      console.log("it's over 9000, eric", x, state.events)
      state.events.splice(0, x)
    }
  }
}
export default new Vuex.Store({
  state,
  mutations
})
