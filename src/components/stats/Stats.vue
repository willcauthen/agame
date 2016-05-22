<template>
  <div id="stats-panel" class="stats three columns">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
  export default {
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
