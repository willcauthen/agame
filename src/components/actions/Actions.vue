<template>
  <div class="six columns">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'actions are thus set up'
      }
    }
  }
</script>

<style scoped>
  div.actions{
    background: green;
  }
</style>