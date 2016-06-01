<template>
  <div>
    <button @click="increment">Fervently research</button>
    <button>Smash some boxes</button>
    <button>Snatch some purses</button>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  // import research from 'vuex'
  import {incrementIntel} from '../../vuex/research'
  export default {
    vuex: {
      actions: {
        increment: incrementIntel
      }
    },
    data () {
      return {
        msg: 'research thing is wired and primed'
      }
    }
  }
</script>