import { when } from '../services/socket'

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
        when('connect', function () {
          commit('setConnected', true)
          resolve()
        })
        when('disconnect', () => {
          commit('setConnected', false)
        })
      })
    },
  },
  getters: {},
}