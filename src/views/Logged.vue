<template>
  <centered-vertical>
    <display-text class="text-dark text-alone">Bienvenue, {{name}}</display-text>
    <players-list/>
    <messages-list/>
    <chat-input/>
  </centered-vertical>
</template>

<script>
  import { mapState } from 'vuex'
  import CenteredVertical from '../components/layout/CenteredVertical'
  import DisplayText from '../components/display/DisplayText'
  import PlayersList from '../components/players-list'
  import ChatInput from '../components/chat-input'
  import MessagesList from '../components/messages-list'

  export default {
    name: 'logged',
    components: { MessagesList, ChatInput, PlayersList, DisplayText, CenteredVertical },
    computed: {
      ...mapState('player', { player: 'player' }),
      name() {
        return this.player && this.player.name
      },
    },
  }
</script>

<style scoped>

</style>