<template>
  <div class="stat-panel row">
    <p class="stat-name">{{name}}</p>
    <p class="stat-level">Level: {{level}}</p>
    <p class="stat-value">{{value}} </p>
    <progress value="{{value}}" max="{{max}}"></progress>
  </div>
</template>

<script>
  import { getStat } from '../../vuex/getter'
  export default {
    vuex: {
      getters: {
        level: getStat
        // value: getCount,
        // level: getLevel
      }
    },
    data () {
      return {
        name: 'intelligence',
        min: 0,
        max: 100,
        msg: 'actions are thus set up'
      }
    }
  }
</script>

<style scoped>
  p.stat-name{
    float: left;
  }
  p.stat-value{
     float: right;
  }
  div#actions{
  }
  progress[value] {
  /* Reset the default appearance */
  -webkit-appearance: none;
   appearance: none;

  width: 75%;
  height: 20px;
  }
</style>
