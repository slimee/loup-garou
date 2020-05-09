<template>
  <centered-vertical>
    <connecting v-if="!connected"/>
    <get-name v-else-if="!logged"/>
    <logged v-else/>
    <version class="version"/>
  </centered-vertical>
</template>

<script>
  import { mapState } from 'vuex'
  import FlexColumn from '../components/layout/FlexColumn'
  import Connecting from './Connecting'
  import GetName from './GetName'
  import Logged from './Logged'
  import Version from '../components/Version'
  import CenteredVertical from '../components/layout/CenteredVertical'

  export default {
    name: 'Home',
    components: {
      CenteredVertical,
      Version,
      Logged,
      Connecting,
      GetName,
      FlexColumn,
    },
    computed: {
      ...mapState('socket', ['connected']),
      ...mapState('player', { logged: 'logged' }),
    },
  }
</script>

<style scoped>
  .version {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>