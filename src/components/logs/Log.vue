<template>
  <div>
		<h1>Log Panel</h1>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hello World!',
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
