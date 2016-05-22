<template>  
  <div class="container" id="app">
    <div class="row">
      <log  id="logs-panel" class="col m3"></log>
      <actions id="actions-panel" class="col m6"></actions>
      <stats  id="stats-panel" class="col m3"></stats>
    </div>
  </div>
</template>

<script>
import Log from './components/logs/Log'
import Actions from './components/actions/Actions'
import Stats from './components/stats/Stats'

export default {
  components: {
    Log, Actions, Stats
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#logs-panel{
}
#actions-panel{
}
#stats-panel{
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  width: 100%;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
