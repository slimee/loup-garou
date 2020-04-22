<template>
  <flex-column class="full-height">
    <loup-garou v-if="game" class="full-height"/>
  </flex-column>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import LoupGarou from './LoupGarou'
  import FlexColumn from '../components/layout/FlexColumn'

  export default {
    name: 'game',
    components: { FlexColumn, LoupGarou },
    computed: {
      ...mapState('game', { game: 'current' }),
      ...mapGetters('game', ['gameId']),
    },
  }
</script>

<style scoped>

</style>