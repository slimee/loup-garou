<template>
  <flex-column>
    <p v-for="game in games" @click="joinGame(game)">{{game.name}}</p>
  </flex-column>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import FlexColumn from '../components/layout/FlexColumn'

  export default {
    name: 'Join',
    data: () => ({ loop: false }),
    components: { FlexColumn },
    computed: {
      ...mapState('game', { games: 'games' }),
    },
    methods: {
      ...mapActions('game', { list: 'list', joinGame: 'join' }),
      async listLoop() {
        await this.list()
        if (this.loop) setTimeout(() => this.listLoop(), 1000)
      },
    },
    async mounted() {
      this.loop = true
      await this.listLoop()
    },
    beforeDestroy() {
      this.loop = false
    },
  }
</script>

<style scoped>

</style>