<template>
  <div id="home">
    <flex-column class="full-height">
      <spacer/>
      <flex-line>
        <spacer/>
        <flex-column>
          <img alt="Loup-garou logo" src="../assets/logo-jeu.png">
          <div>Bientôt...</div>
        </flex-column>
        <spacer/>
      </flex-line>
      <spacer/>
    </flex-column>
    <version/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Version from '../components/Version'
  import FlexColumn from '../components/layout/FlexColumn'
  import Spacer from '../components/layout/Spacer'
  import FlexLine from '../components/layout/FlexLine'

  export default {
    name: 'Home',
    components: {
      FlexLine,
      Spacer,
      FlexColumn,
      Version,
    },
    mounted() {
      this.$store.dispatch('app/mount')
    },
  }
</script>
