<template>
  <flex-column class="messages-list">
    <transition-group name="list-complete" tag="p">
      <display-text v-for="message in messages" :key="message.id"
                    class="list-complete-item">
        {{message.player.name}}: {{message.content}}
      </display-text>
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
    },
  }
</script>

<style scoped>
  .messages-list {
    position: absolute;
    bottom: 2em;
    left: 0.5em;
  }

  .list-complete-item {
    transition: all 0.3s;
  }

  .list-complete-leave-to {
    opacity: 0;
  }

</style>