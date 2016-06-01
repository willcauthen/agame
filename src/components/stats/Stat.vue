<template>
  <div v-for="key in skills.keys"class="stat-panel row {{key}}" >
    <p class="stat-name"> {{key}} </p>
    <p class="stat-level">Level: {{skills[key].level}}</p>
    <p class="stat-value">Value: {{skills[key].count}} </p>
    <progress value="{{skills[key].count}}" max="{{max}}"></progress>
  </div>
</template>

<script>
  import { getStat } from '../../vuex/getter'
  export default {
    vuex: {
      getters: {
        skills: getStat
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
  p.stat-panel{
    float: left;
  }
  p.stat-value{
     float: right;
     padding-right: 10px;
  }
  div#actions{
  }
  progress[value] {
  /* Reset the default appearance */
  -webkit-appearance: none;
   appearance: none;

  width: 30%;
  height: 20px;
  }
</style>
