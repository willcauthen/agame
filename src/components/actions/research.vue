<template>
  <div>
    <button class="statBtn intelligence" @click="incrementStat('intelligence')">Fervently research</button>
    <button class="statBtn strength" @click="incrementStat('strength')">Smash some boxes</button>
    <button class="statBtn guile" @click="incrementStat('guile')">Snatch some purses</button>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  import {incrementStat} from '../../vuex/research'
  export default {
    vuex: {
      actions: {
        incrementStat: incrementStat
      }
    },
    data () {
      return {
        msg: 'research thing is wired up and primed'
      }
    }
  }
</script>

<style scoped>
  p.stat-panel{
    float: left;
  }
  p.stat-value{
     float: right;
     padding-right: 10px;
  }
  div#actions{
  }
  progress[value] {
  /* Reset the default appearance */
  -webkit-appearance: none;
   appearance: none;

  width: 30%;
  height: 20px;
}
</style>