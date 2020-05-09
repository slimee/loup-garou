import { emit, when } from '../services/socket'
import uuid from '../services/uuid'

export default {
  namespaced: true,
  state: {
    logged: false,
    player: null,
    selectedName: '',
  },
  mutations: {
    selectName(state, name) {
      state.selectedName = name
    },
    setLogged(state, logged) {
      state.logged = logged
    },
    setPlayer(state, player) {
      state.player = player
    },
  },
  getters: {
    isHost(state, getters, rootState) {
      return rootState.game.current.host.id === state.player.id
    },
  },
  actions: {
    init({ commit }) {
      when('user joined', (player) => {
        commit('userJoined', player)
      })
      when('user left', (player) => {
        commit('userLeft', player)
      })
    },
    selectName({ commit, dispatch }, name) {
      commit('selectName', name)
      dispatch('newLogin', name)
    },
    newLogin({ dispatch }, name) {
      dispatch('login', { id: uuid() + '', name })
    },
    async login({ commit, state }, player) {
      await emit('login', player)
      commit('setPlayer', player)
      commit('setLogged', true)
      localStorage.setItem('player', JSON.stringify(player))
    },
  },
}
