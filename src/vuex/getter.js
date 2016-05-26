export function getCount (state) {
  return state.count
}

export function getLevel (state) {
  return state.level
}

// Use this instead of getCount and getLevel in each stat
export function getStat (state, name){
  return state.stats[name]
}
