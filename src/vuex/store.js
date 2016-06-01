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
  INCREMENT (state, amount, action) {
    var stat = state.actions[0].affectedStat
    state.stats[stat].count += state.actions[0].increment
    console.log(state.stats[stat].count, state.stats[stat].level)
    if (state.stats[stat].count > 99) {
      state.stats[stat].count -= 100
      state.stats[stat].level++
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
