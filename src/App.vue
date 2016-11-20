<template>
  <div id="app">
    <login></login>
    <console></console>
  </div>
</template>

<script>
import login from './components/login.vue'
import console from './layouts/console.vue'

export default {
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  },
  components:{
    login,
    console
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
