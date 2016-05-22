<template>
  <div class="log three columns">
		<h2>{{ msg }}</h2>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'here lie the logs',
        events: [
          {msg: 'first event'},
          {msg: 'second event'},
          {msg: 'third event'},
          {msg: 'fourth event'}
        ]
      }
    }
  }
</script>

<style scoped>
  div.log {
    background: blue;
  }
  
</style>