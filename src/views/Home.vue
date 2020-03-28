<template>
  <flex-column id="home">
    <connecting v-if="!connected"/>
    <get-name v-else-if="!logged"/>
    <logged v-else-if="!currentGame"/>
    <game v-else/>
    <chat v-if="connected"></chat>
    <absolute-stuff/>
  </flex-column>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex'
  import Version from '../components/Version'
  import Centered from '../components/layout/Centered'
  import FlexColumn from '../components/layout/FlexColumn'
  import GetName from './GetName'
  import Connecting from './Connecting'
  import AbsoluteStuff from '../components/AbsoluteStuff'
  import Logged from './Logged'
  import Game from './Game'
  import Chat from '../components/chat'

  export default {
    name: 'Home',
    components: {
      Chat,
      Game,
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
      ...mapGetters('game', { currentGame: 'current' }),
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
