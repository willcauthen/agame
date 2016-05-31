import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  stats: {
    'intelligence': {
      name: 'intelligence',
      level: 0,
      count: 0
    },
    'strength': {
      name: 'strength',
      level: 0,
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
      text: 'did some push-ups',
      increment: 10
    }
  ]
}

const mutations = {
  INCREMENT (state, amount, action) {
    var stat = action.affectedStat
    action.affectedStat = state.stats[stat]
    if (stat.count > 99) {
      stat.count = stat.count - 100
      stat.level++
    }
    stat.count = stat.count + action.increment
  }
}

export default new Vuex.Store({
  state,
  mutations
})
