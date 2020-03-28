<template>
  <centered-vertical>
    <display-text class="text-dark text-alone">Bienvenue, {{name}}</display-text>
    <players-list/>
    <block>
      <display-text class="text-dark text-medium" @click="createGame">Créer une partie</display-text>
      <display-text class="text-dark text-medium" @click="joinGame">Rejoindre une partie</display-text>
    </block>
    <messages-list/>
    <chat-input/>
  </centered-vertical>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import CenteredVertical from '../components/layout/CenteredVertical'
  import DisplayText from '../components/display/DisplayText'
  import PlayersList from '../components/players-list'
  import ChatInput from '../components/chat-input'
  import MessagesList from '../components/messages-list'
  import Block from '../components/layout/block'

  export default {
    name: 'logged',
    components: { Block, MessagesList, ChatInput, PlayersList, DisplayText, CenteredVertical },
    computed: {
      ...mapState('player', { player: 'player' }),
      name() {
        return this.player && this.player.name
      },
    },
    methods: {
      ...mapActions('game', { 'createGame': 'create', 'joinGame': 'join' }),
    },
  }
</script>

<style scoped>

</style>