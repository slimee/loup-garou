<template>
  <div class="chat">
    <messages-list/>
    <chat-input/>
  </div>
</template>
<script>
  import ChatInput from './chat-input'
  import MessagesList from './messages-list'

  export default {
    name: 'chat',
    components: { ChatInput, MessagesList },
  }
</script>
<style scoped>
  .chat {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>