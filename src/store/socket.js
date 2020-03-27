import socket from '../services/socket'

export default {
  namespaced: true,
  state: {
    connected: false,
  },
  mutations: {
    setConnected(state, connected) {
      state.connected = connected
    },
  },
  actions: {
    bind({ commit }) {
      return new Promise((resolve) => {
        socket.on('connect', function () {
          commit('setConnected', true)
          resolve()
        })
        socket.on('disconnect', () => {
          commit('setConnected', false)
          commit('setLogged', false)
        })
      })
    },
  },
  getters: {},
}