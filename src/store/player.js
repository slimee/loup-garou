import socket from '../services/socket'

const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16),
  )
}

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
      socket.on('user joined', (player) => {
        commit('userJoined', player)
      })
      socket.on('user left', (player) => {
        commit('userLeft', player)
      })
      socket.on('login', ({ player, players }) => {
        console.log('player logged', player)
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
      dispatch('login', { id: uuidv4() + '', name })
    },
    login({ commit, state }, player) {
      console.log('login player', player)
      socket.emit('login', player)
    },
  },
}