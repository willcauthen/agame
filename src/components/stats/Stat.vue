<template>
  <div class="stat-panel row">
    <p class="stat-name">{{name}}</p>
    <p class="stat-value">{{value}} </p>
    <progress value="{{value}}" max="{{max}}"></progress>
  </div>
</template>

<script>
  import { getCount } from '../../vuex/getter'
  export default {
    vuex: {
      getters: {
        value: getCount
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
    background: green;
  }
  progress[value] {
  /* Reset the default appearance */
  -webkit-appearance: none;
   appearance: none;

  width: 250px;
  height: 20px;
}
</style>
