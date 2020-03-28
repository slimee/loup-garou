<template>
  <centered-vertical>
    <img alt="Loup-garou logo" src="../assets/connecting.png">
    <display-text class="text-alone">Connection...</display-text>
  </centered-vertical>
</template>

<script>
  import Centered from '../components/layout/Centered'
  import CenteredVertical from '../components/layout/CenteredVertical'
  import DisplayText from '../components/display/DisplayText'

  export default {
    name: 'Connecting',
    components: { DisplayText, CenteredVertical, Centered },
  }
</script>

<style scoped>

</style>