<template>
  <div id="app">
    <main-menu></main-menu>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'app',
  components: {
    'main-menu': MainMenu,
    'main-footer': MainFooter
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
</style>
