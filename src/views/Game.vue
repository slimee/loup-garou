<template>
  <flex-column>
    <div>{{name}}</div>
    <players-list :players="others"></players-list>
    <p>Il manque {{remaining}} joueurs..</p>
  </flex-column>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PlayersList from '../components/players-list'
  import FlexColumn from '../components/layout/FlexColumn'
  import DisplayText from '../components/display/DisplayText'

  export default {
    name: 'game',
    components: { DisplayText, FlexColumn, PlayersList },
    computed: {
      ...mapGetters('game', { game: 'current', hosting: 'hosting' }),
      ...mapGetters(['me']),
      name() {
        return this.game.name
      },
      remaining() {
        return this.game.neededPlayers - this.others.length - 1
      },
      others() {
        return []
      },
      join() {

      }
    },
  }
</script>

<style scoped>

</style>