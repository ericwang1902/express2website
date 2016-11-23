<template>
<div class="outdiv">
    <progress-bar :type="'primary'" :value="30" :max="100"></progress-bar>
</div>
</template>

<script>
    import vheader from '../layouts/header.vue'

export default {
  data () {
    return {
      msg: 'Hello Vue 4.0!'
    }
  },
    components:{
        vheader
    }
}
</script>

<style>
.outdiv{
    width: inherit;height: inherit;display: flex;display: -webkit-flex;flex-direction:column
}
</style>
