export const incrementIntel = function ({ dispatch, intel }) {
  console.log('inside the incrementIntel function')
  dispatch('INCREMENT', 10)
}
