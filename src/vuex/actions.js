// More info https://github.com/vuejs/vuex/blob/master/docs/en/actions.md
export const incrementCounter = function ({ dispatch, state }, action) {
  dispatch('INCREMENT', action)
}
