<template>
  <div class="home">
    <img alt="Loup-garou logo" src="../assets/logo-jeu.png">
    <version/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Version from '../components/Version'

export default {
  name: 'Home',
  components: {
    Version,
    HelloWorld
  },
  mounted() {
    this.$store.dispatch('app/mount')
  },
}
</script>
