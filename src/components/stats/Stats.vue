<template>
  <div class="stats-panel">
    <h5 class="stats-header">Status</h5>
    <stat>{{stat.guile}}</stat>
  </div>
</template>

<script>
  import Stat from './Stat.vue'

  export default {
    components: { Stat },
    data () {
      return {
        msg: 'stats are set up, too'
      }
    }
  }
</script>

<style scoped>
  div.stats{
    background: red;
  }
</style>
