<template>
  <input type="text" class="chat-input" v-model="message" v-on:keyup.enter="enter"/>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'chat-input',
    data: () => ({
      message: '',
    }),
    methods: {
      ...mapActions('chat', ['sendMessage']),
      async enter() {
        if (this.message) {
          await this.sendMessage(this.message)
          this.message = null
        }
      },
    },
  }
</script>

<style scoped>
  .chat-input {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2em;
    background-color: #111111;
    border: solid 1px darkgray;
  }

  .chat-input:focus {
    background-color: #222222;
    color: whitesmoke;
  }
</style>