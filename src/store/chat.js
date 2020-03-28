import socket from '../services/socket'

export default {
  namespaced: true,
  state: {
    messages: [],
    typingPlayers: [],
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message)
    },
    removeMessage(state, messageToRemove) {
      state.messages = state.messages.filter(message => message !== messageToRemove)
    },
    addTypingPlayer(state, player) {
      const alreadyTyping = state.typingPlayers
        .some(typingPlayer => typingPlayer.id === player.id)
      if (!alreadyTyping)
        state.typingPlayers.push(player)
    },
    removeTypingPlayer(state, playerToRemove) {
      state.typingPlayers = state.typingPlayers
        .filter(typingPlayer => typingPlayer.id !== playerToRemove.id)
    },
  },
  actions: {
    init({ commit }) {
      socket.on('new message', (message) => {
        commit('addMessage', message)
        setTimeout(() => commit('removeMessage', message), 15000)
      })
      socket.on('typing', (player) => {
        commit('addTypingPlayer', player)
      })
      socket.on('stop typing', (player) => {
        commit('removeTypingPlayer', player)
      })
    },
    sendMessage({}, message) {
      socket.emit('new message', message)
    },
    typing({}) {
      socket.emit('typing')
    },
    stopTyping({}) {
      socket.emit('stop typing')
    },
  },
  getters: {},
}