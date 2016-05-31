<template>
  <div class="stat-panel row">
    <p class="stat-name">Name: {{skills.strength.name}}</p>
    <p class="stat-level">Level: {{skills.strength.level}}</p>
    <p class="stat-value">Value: {{skills.strength.count}} </p>
    <progress value="{{skills.strength.count}}" max="{{max}}"></progress>
  </div>
    <div class="stat-panel row">
    <p class="stat-name">Name: {{skills.intelligence.name}}</p>
    <p class="stat-level">Level: {{skills.intelligence.level}}</p>
    <p class="stat-value">Value: {{skills.intelligence.count}} </p>
    <progress value="{{skills.intelligence.count}}" max="{{max}}"></progress>
  </div>
    <div class="stat-panel row">
    <p class="stat-name">Name: {{skills.guile.name}}</p>
    <p class="stat-level">Level: {{skills.guile.level}}</p>
    <p class="stat-value">Value: {{skills.guile.count}} </p>
    <progress value="{{skills.guile.count}}" max="{{max}}"></progress>
  </div>

</template>

<script>
  import { getStat } from '../../vuex/getter'
  export default {
    vuex: {
      getters: {
        skills: getStat
        // value: getCount,
        // level: getLevel
      }
    },
    data () {
      return {
        name: 'simple stat',
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
