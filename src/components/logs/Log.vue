<template>
  <div class="log-panel">
		<h1 class="log-header">Log Panel</h1>
    <ul>
      <li v-for="event in events"> {{ event.thing }}</li>
    </ul>
  </div>
</template>
<script>
  import store from '../../vuex/store'
  export default {
    components: {store},
    data () {
      return {
        msg: 'Hello World!',
        events: store.state.events
      }
    }
  }
  console.log('hey ', store.state.events)
</script>

<style scoped>
  div.log-panel {
  }
</style>
