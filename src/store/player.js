import { emit, when } from '../services/socket'
import uuid from '../services/uuid'

export default {
  namespaced: true,
  state: {
    logged: false,
    player: null,
    players: [],
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
    setPlayers(state, players) {
      state.players = players
    },
    userJoined(state, player) {
      state.players.push(player)
    },
    userLeft(state, leftingPlayer) {
      state.players = state.players.filter(player => player.id !== leftingPlayer.id)
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
      when('login', ({ player, players }) => {
        commit('setLogged', true)
        commit('setPlayer', player)
        commit('setPlayers', players)
        localStorage.setItem('player', JSON.stringify(player))
      })
    },
    selectName({ commit, dispatch }, name) {
      commit('selectName', name)
      dispatch('newLogin', name)
    },
    newLogin({ dispatch }, name) {
      dispatch('login', { id: uuid() + '', name })
    },
    login({ commit, state }, player) {
      emit('login', player)
    },
  },
}