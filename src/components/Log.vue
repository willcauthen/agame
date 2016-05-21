<template>
  <div class="log">
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
        msg: 'here lie the logs'
      }
    }
  }
</script>

<style scoped>
  div.log {
    background: blue;
  }
  
</style>