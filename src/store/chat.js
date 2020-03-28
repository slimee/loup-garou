import { emit, when } from '../services/socket'

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
      when('new message', (message) => {
        commit('addMessage', message)
        setTimeout(() => commit('removeMessage', message), 15000)
      })
      when('typing', (player) => {
        commit('addTypingPlayer', player)
      })
      when('stop typing', (player) => {
        commit('removeTypingPlayer', player)
      })
    },
    sendMessage: ({}, message) => emit('new message', message),
    typing: ({}) => emit('typing'),
    stopTyping: ({}) => emit('stop typing'),
  },
  getters: {},
}