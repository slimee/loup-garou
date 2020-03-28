<template>
  <flex-column class="messages-list">
    <transition-group name="list-complete" tag="p">
      <p v-for="message in messages" :key="message.id"
                    class="list-complete-item">
        {{title(message.player)}}: {{message.content}}
      </p>
    </transition-group>
  </flex-column>
</template>

<script>
  import { mapState } from 'vuex'
  import DisplayText from './display/DisplayText'
  import FlexColumn from './layout/FlexColumn'

  export default {
    name: 'messages-list',
    components: { FlexColumn, DisplayText },
    computed: {
      ...mapState('chat', ['messages']),
      ...mapState('player', { me: 'player' }),
    },
    methods: {
      title(player) {
        if (player.id === this.me.id) return 'vous'
        else return player.name
      },
    },
  }
</script>

<style scoped>
  .list-complete-item {
    transition: all 0.3s;
  }

  .list-complete-leave-to {
    opacity: 0;
  }

</style>