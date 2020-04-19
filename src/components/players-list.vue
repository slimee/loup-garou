<template>
  <flex-line>
    <connected-pastille v-if="!alone"/>
    <p @click="expand">{{text}}</p>
  </flex-line>
</template>

<script>
  import ConnectedPastille from './connected-pastille'
  import FlexLine from './layout/FlexLine'

  export default {
    name: 'players-list',
    components: { FlexLine, ConnectedPastille },
    data: () => ({ compact: true }),
    props: {
      players: { required: true, type: Array },
    },
    computed: {
      count() {
        return this.players.length
      },
      alone() {
        return this.count === 0
      },
      plural() {
        return this.count > 1 ? 's' : ''
      },
      text() {
        if (this.alone) return this.textAlone
        else if (this.compact) return this.textCompact
        else return this.textMany
      },
      textAlone() {
        return 'Vous êtes seul.'
      },
      textCompact() {
        return `Il y a ${this.count} villageois...`
      },
      textMany() {
        const twoOthers = this.players.length === 2
        let separator
        if (twoOthers) separator = ' et '
        else separator = ', '
        return `${this.players.map(player => player.name).join(separator)} ${this.plural ? 'sont' : 'est'} là...`
      },
    },
    methods: {
      expand() {
        this.compact = false
        setTimeout(() => this.compact = true, 15000)
      },
    },
  }
</script>

<style scoped>
</style>