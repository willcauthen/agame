// export function getCount (state) {
//   return state.count
// }

// export function getLevel (state) {
//   return state.level
// }
//
export function getStat (state, name) {
  console.log('inside the getStat function', state.stats['intelligence'].level)
  return state.stats['intelligence'].level
}
