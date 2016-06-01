<template>
  <div>
    <button @click="incrementStat('intelligence')">Fervently research</button>
    <button @click="incrementStat('strength')">Smash some boxes</button>
    <button @click="incrementStat('guile')">Snatch some purses</button>
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
        msg: 'research thing is wired and primed'
      }
    }
  }
</script>