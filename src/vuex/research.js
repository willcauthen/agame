export const incrementStat = function ({ dispatch, state }, action) {
  console.log('inside the incrementStat function', action)
  dispatch('INCREMENT', action)
}
