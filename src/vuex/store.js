import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  level: 1
}

const mutations = {
  INCREMENT (state, amount) {
    if (state.count > 99) {
      state.count = state.count - 100
      state.level++
    }
    state.count = state.count + amount
  }
}

export default new Vuex.Store({
  state,
  mutations
})
