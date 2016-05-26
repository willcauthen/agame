<template>
  <div class="stats-panel">
    <h5 class="stats-header">Status</h5>
    <stat></stat>  <!-- Do a for loop here over all of the stats in the store -->
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
