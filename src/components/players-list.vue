<template>
  <div>
    <div v-if="alone">Vous êtes seul.</div>
    <div v-else v-for="player in others">
      {{player.id}} - {{player.name}}
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'players-list',
    computed: {
      ...mapState('player', { me: 'player', others: 'players' }),
      alone() {
        return !this.others || this.others.length === 0
      },
    },
  }
</script>

<style scoped>

</style>