<template>
  <div class="button" @click="$emit('click')">☰</div>
  <!--  <div>-->
  <!--    <version/>-->
  <!--    <messages-list/>-->
  <!--      <chat-input v-if="connected"/>-->
  <!--  </div>-->
</template>

<script>
  import { mapState } from 'vuex'
  import Version from './Version'
  import MessagesList from './messages-list'
  import ChatInput from './chat-input'
  import FlexLine from './layout/FlexLine'

  export default {
    name: 'my-menu',
    components: { FlexLine, ChatInput, MessagesList, Version },
    computed: {
      ...mapState('socket', ['connected']),
    },
  }
</script>

<style scoped>
  .button {
    cursor: pointer;
  }

</style>