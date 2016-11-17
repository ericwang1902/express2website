<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <register></register>
  </div>
</template>

<script>
import register from './components/register.vue'

export default {
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  },
  components:{
    register
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
