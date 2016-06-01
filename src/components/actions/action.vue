<template>
  <div>
  	<button class="statBtn" @click='increment'>{{ name }}</button>
  </div>
</template>

<script>
  import { incrementCounter } from '../../vuex/actions'
  export default {
    vuex: {
      actions: {
        increment: incrementCounter
      }
    },
    data () {
      return {
        name: 'simple stat'
      }
    }
  }
</script>

<style scoped>
</style>
