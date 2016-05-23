<template>
  <div id="actions">
    <h2 id="actions-header">Action Panel</h2>
    <action></action>
  </div>
</template>

<script>
  import action from './action'
  export default {
    components: { action },
    data () {
      return {
        msg: 'actions are thus set up'
      }
    }
  }
</script>

<style scoped>
  div#actions{
  }
</style>
