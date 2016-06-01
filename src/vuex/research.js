export const incrementStat = function ({ dispatch, state }, action) {
  console.log('inside the incrementStat function', state, action)
  dispatch('INCREMENT', action)
}
// export const incrementStr = function ({ dispatch, str }) {
//   console.log('inside the incrementStr function')
//   dispatch('INCREMENT', 10)
// }

// export const incrementGuile = function ({ dispatch, str }) {
//   console.log('inside the incrementGuile function')
//   dispatch('INCREMENT', 10)
// }
