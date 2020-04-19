<template>
  <div>
    <version/>
    <messages-list/>
    <flex-line>
      <div class="menu-button">☰</div>
      <chat-input v-if="connected"/>
    </flex-line>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Version from './Version'
  import MessagesList from './messages-list'
  import ChatInput from './chat-input'
  import FlexLine from './layout/FlexLine'

  export default {
    name: 'menu',
    components: { FlexLine, ChatInput, MessagesList, Version },
    computed: {
      ...mapState('socket', ['connected']),
    },
  }
</script>

<style scoped>
  .menu-button {
    width: 2em;
    cursor: pointer;
  }
</style>