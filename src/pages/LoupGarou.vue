<template>
  <div>
    <surface-svg>
      <landscape/>
      <players :players="players"/>
    </surface-svg>
    <my-menu :items="menuItems"></my-menu>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex'
  import SurfaceSvg from '../components/layout/SurfaceSvg'
  import Landscape from '../components/loupgarou/Landscape'
  import Players from '../components/loupgarou/Players'
  import MyMenu from '../components/my-menu'

  export default {
    name: 'loup-garou',
    components: { MyMenu, Players, Landscape, SurfaceSvg },
    computed: {
      ...mapState('game', { game: 'current' }),
      ...mapGetters('game', { players: 'players', canStartGame: 'currentCanBeStarted' }),
      ...mapGetters('player', { iAmHost: 'isHost' }),
      players() {
        return this.game && this.game.players
      },
      name() {
        return this.game && this.game.name
      },
      iCanStartGame() {
        return this.iAmHost && this.canStartGame
      },
      menuItems() {
        return [
          !this.iCanStartGame && { action: this.startGame, label: '🌑 Démarrer la partie' },
          { action: this.goToHome, label: '🚪 Quitter la partie' },
        ]
      },
    },
    methods: {
      ...mapActions('router', ['goToHome']),
      ...mapActions('game', { startGame: 'start' }),
    },
  }
</script>

<style scoped>

</style>