<template>
  <flex-column class="container">
    <div v-if="playersTyping" class="players-typing">{{typingPlayersText}}</div>
    <input type="text" class="chat-input" placeholder="Dire quelque chose..."
           v-model="message"
           v-on:keyup.enter="enterMessage"
           @focus="typing" @blur="stopTyping"
    />
  </flex-column>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import FlexColumn from './layout/FlexColumn'

  export default {
    name: 'chat-input',
    components: { FlexColumn },
    data: () => ({
      message: '',
    }),
    computed: {
      ...mapState('chat', ['typingPlayers']),
      playersTyping() {
        return this.typingPlayers.length > 0
      },

      twoPlayersAreTyping() {
        return this.typingPlayers.length === 2
      },
      manyPlayersAreTyping() {
        return this.typingPlayers.length > 2
      },
      textSeparator() {
        if (this.twoPlayersAreTyping) return ' et '
        else return ', '
      },
      playersNames() {
        return this.typingPlayers.map(typingPlayer => typingPlayer.name)
      },
      typingPlayersText() {
        const plural = this.manyPlayersAreTyping
        const separator = this.textSeparator
        return `${this.playersNames.join(separator)} ${plural ? 'écrivent' : 'écrit'}...`
      },
    },
    methods: {
      ...mapActions('chat', ['sendMessage', 'typing', 'stopTyping']),
      async enterMessage(event) {
        if (this.message) {
          await this.sendMessage(this.message)
          this.message = null
        }
        event.target.blur()
      },
    },
  }
</script>

<style scoped>
  .container {
    width: 100%;
  }

  .chat-input {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    height: 2em;
    background-color: #111111;
    border: solid 1px #5e5e5e;
  }

  .chat-input:focus {
    background-color: #222222;
    color: whitesmoke;
  }

  .chat-input::-webkit-input-placeholder { /* Edge */
    color: var(--placeholder-color);
  }

  .chat-input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: var(--placeholder-color);
  }

  .chat-input::placeholder {
    color: var(--placeholder-color);
  }

  .players-typing {
    align-self: flex-start;
  }
</style>