<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
import login from './components/login.vue'

export default {
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  },
  components:{
    login
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
