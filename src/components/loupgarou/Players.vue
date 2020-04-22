<template>
  <g>
    <player v-for="player in players" :key="player.id" :player="player"></player>
  </g>
</template>

<script>
  import Player from './Player'

  export default {
    name: 'players',
    components: { Player },
    props: {
      players: Array,
    },
  }
</script>

<style scoped>

</style>