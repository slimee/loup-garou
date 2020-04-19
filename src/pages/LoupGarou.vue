<template>
  <div>
    <surface-svg>
      <landscape/>
      <deaths/>
      <alives/>
    </surface-svg>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import FlexColumn from '../components/layout/FlexColumn'
  import PlayersList from '../components/players-list'
  import SurfaceSvg from '../components/layout/SurfaceSvg'
  import Landscape from '../components/loupgarou/Landscape'
  import Alives from '../components/loupgarou/alives'
  import Deaths from '../components/loupgarou/deaths'

  export default {
    name: 'loup-garou',
    components: { Deaths, Alives, Landscape, SurfaceSvg, PlayersList, FlexColumn },
    computed: {
      ...mapState('game', { game: 'current' }),
      players() {
        return this.game && this.game.players
      },
      name() {
        return this.game && this.game.name
      },
    },
  }
</script>

<style scoped>
</style>