export function getStat (state, name) {
  state.stats['keys'] = Object.keys(state.stats)
  return state.stats
}
