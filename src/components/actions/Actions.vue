<template>
  <div id="actions">
    <h2 id="actions-header">Action Panel</h2>
    <p>{{msg}}</p>
    <action></action>
    <research></research>  
  </div>
</template>

<script>
  import action from './action'
  import research from './research'
  export default {
    components: { action, research },
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
