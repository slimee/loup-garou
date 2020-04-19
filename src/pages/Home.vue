<template>
  <flex-column>
    <connecting v-if="!connected"/>
    <get-name v-else-if="!logged"/>
    <logged v-else/>
  </flex-column>
</template>

<script>
  import { mapState } from 'vuex'
  import FlexColumn from '../components/layout/FlexColumn'
  import Connecting from './Connecting'
  import GetName from './GetName'
  import Logged from './Logged'

  export default {
    name: 'Home',
    components: {
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
