<template>
  <div class="log-panel">
		<h1 class="log-header">Log Panel</h1>
    <ul>
      <li v-for="event in events"> {{ event.thing }}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'Hello World!',
        events: [
          {thing: 'first event'},
          {thing: 'second event'},
          {thing: 'third event'},
          {thing: 'frth event'}
        ]
      }
    }
  }
</script>

<style scoped>
  div.log-panel {
  }
</style>
