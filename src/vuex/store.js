import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  stats:
    {
      "awesomeness":    //Putting the stats in a hash so it is easier to find them
      { name: "awesomeness",  //If they were in an array just with a name you would have to search the whole thing to find one
        level: 0,
        count: 0
      }
      "broodyness":
      {
        name: "broodyness"
        level: 0,
        count: 0
      }
    }
  actions:  //These we dont' really care to look up just iterate through so i am not bother to put them in a ash
    [
      {
        affectedStat: "awesomness",  
        text: "read old books",
        cooldown: 1, //second
        increment: 1
      },
      {
        affectedStat: "broodyness",  
        text: "watch fox news",
        cooldown: 1, //second
        increment: 20
      },
      ]
}

const mutations = {
  INCREMENT (state, amount, action) {
    stat = action.affectedStat
    affectedStat = state.stats[stat]
    if (affectedStat.count > 99) {
      affectedStat.count = affectedStat.count - 100
      affectedStat.level++
    }
    affectedStat.count = affectedStat.count + action.increment
  }
}

export default new Vuex.Store({
  state,
  mutations
})
