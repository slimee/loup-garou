import { emit, when } from '../services/socket'
import uuid from '../services/uuid'

export default {
  namespaced: true,
  state: {
    mine: null,
    joined: null,
    games: [],
  },
  mutations: {
    setMine(state, game) {
      state.mine = game
    },
    setGames(state, games) {
      state.games = games
    },
  },
  actions: {
    init({ commit }) {
      when('join request', (game, respond) => {
        console.log('join request')
        respond('coucou')
      })
    },
    async create({ commit, rootGetters }, name) {
      const me = rootGetters.me
      const game = {
        id: uuid(),
        name,
        players: [me],
        host: me,
        neededPlayers: 7,
      }
      await emit('create game', game)
      console.log('setMine', game)
      commit('setMine', game)
    },
    async list({ commit }) {
      const games = await emit('list games')
      commit('setGames', games)
    },
    async join({ commit }, game) {
      console.log('join...', game.name)
      const joinResult = await emit('join game', game)
      console.log('join result...', game.name)
      if (joinResult) {
        commit('setJoined', game)
      }
    },
  },
  getters: {
    current: (state) => state.mine || state.joined,
    hosting: (state) => !!state.mine,
  },
}