<template>
  <centered-vertical>

    <display-text v-if="fresh" class="text-alone">Bienvenue, {{playerName}}</display-text>
    <players-list v-if="fresh" :players="others"/>

    <clickable-text v-if="fresh || creating" @click.native="createClick" class="mt-1">Créer une partie</clickable-text>
    <input v-if="creating" type="text" class="input-text-alone mt-1" autofocus v-model="gameName"
           v-on:keyup.enter="createGame(gameName)"/>
    <input v-if="creating" type="button" class="input-button-alone" :disabled="!hasGameName" @click="createGame"
           value="Ok"/>

    <clickable-text v-if="fresh || joining" @click.native="joinClick">Rejoindre une partie</clickable-text>
    <join v-if="joining">join</join>
  </centered-vertical>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import CenteredVertical from '../components/layout/CenteredVertical'
  import DisplayText from '../components/display/DisplayText'
  import PlayersList from '../components/players-list'
  import ClickableText from '../components/display/ClickableText'
  import Chat from '../components/chat'
  import Join from './Join'

  export default {
    name: 'logged',
    components: { Join, Chat, ClickableText, PlayersList, DisplayText, CenteredVertical },
    data: () => ({
      status: 'fresh',
      gameName: '',
    }),
    computed: {
      ...mapState('player', { player: 'player', others: 'players' }),
      playerName() {
        return this.player && this.player.name
      },
      fresh() {
        return this.status === 'fresh'
      },
      creating() {
        return this.status === 'creating'
      },
      joining() {
        return this.status === 'joining'
      },
      hasGameName() {
        return this.gameName.length > 2
      },
    },
    methods: {
      createClick() {
        this.status = 'creating'
      },
      joinClick() {
        this.status = 'joining'
      },
      ...mapActions('game', { 'createGame': 'create' }),
    },
  }
</script>

