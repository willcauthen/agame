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
import store from './vuex/store'

export default {
  components: {
    Log, Actions, Stats
  }, store
}
</script>

<style>
html {
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

#logs-panel{
  border: 3px solid black;
}
#actions{
  border: 3px solid black;
}
#stats-panel{
  border: 3px solid black;
}

#app {
  color: #2c3e50;
  width: 90%;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

#app div {
  color: grey; 
}

.logo {
  width: 100px;
  height: 100px;
}
</style>
