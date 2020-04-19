<template>
  <flex-column class="full-height">
    <loup-garou v-if="game" class="full-height"/>
    <menu/>
  </flex-column>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex'
  import LoupGarou from './LoupGarou'
  import FlexColumn from '../components/layout/FlexColumn'
  import Menu from '../components/Menu'

  export default {
    name: 'game',
    components: { Menu, FlexColumn, LoupGarou },
    computed: {
      ...mapState('game', { game: 'current' }),
      ...mapGetters('game', ['gameId']),
    },
  }
</script>

<style scoped>

</style>