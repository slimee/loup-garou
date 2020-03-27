import socket from '../services/socket'

export default {
  namespaced: true,
  state: {
    messages: [],
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message)
    },
    removeMessage(state, messageToRemove) {
      state.messages = state.messages.filter(message => message !== messageToRemove)
    },
  },
  actions: {
    init({ commit }) {
      socket.on('new message', (message) => {
        commit('addMessage', message)
        setTimeout(() => commit('removeMessage', message), 5000)
      })
    },
    sendMessage({}, message) {
      socket.emit('new message', message)
    },
  },
  getters: {},
}