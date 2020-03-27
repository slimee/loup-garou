<template>
  <div id="home">
    <connecting v-if="!connected"/>
    <get-name v-else-if="!logged"/>
    <logged v-else/>
    <absolute-stuff/>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import Version from '../components/Version'
  import Centered from '../components/layout/Centered'
  import FlexColumn from '../components/layout/FlexColumn'
  import GetName from './GetName'
  import Connecting from './Connecting'
  import AbsoluteStuff from '../components/AbsoluteStuff'
  import Logged from './Logged'

  export default {
    name: 'Home',
    components: {
      Logged,
      AbsoluteStuff,
      Connecting,
      GetName,
      FlexColumn,
      Centered,
      Version,
    },
    mounted() {
      this.$store.dispatch('app/mount')
    },
    computed: {
      ...mapState('socket', ['connected']),
      ...mapState('player', { logged: 'logged' }),
    },
    methods: {
      ...mapActions('app', ['autologin']),
    },
    watch: {
      connected(value) {
        if (value) {
          console.log('socket is now connected!')
          this.autologin()
        }
      },
    },
  }
</script>
