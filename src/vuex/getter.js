// export function getCount (state) {
//   return state.count
// }

// export function getLevel (state) {
//   return state.level
// }
//
export function getStat (state, name) {
  console.log('inside the getStat function', Object.keys(state.stats))
  state.stats['keys'] = Object.keys(state.stats)
  return state.stats
}
