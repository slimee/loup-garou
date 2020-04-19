import { emit } from '../services/socket'
import uuid from '../services/uuid'

export default {
  namespaced: true,
  state: {
    current: null,
    joined: null,
    games: [],
  },
  mutations: {
    setCurrent(state, game) {
      state.current = game
    },
    setGames(state, games) {
      state.games = games
    },
  },
  getters: {
    gameId(state, getters, rootState) {
      return rootState.route.params.gameId
    },
  },
  actions: {
    init({ commit }) {
    },
    async list({ commit }) {
      const { games } = await emit('list games')
      commit('setGames', games)
    },
    async create({ commit, rootGetters, dispatch }, name) {
      const me = rootGetters.me
      const game = {
        id: uuid(),
        name,
        players: [me],
      }
      const gameId = await emit('create game', game)
      dispatch('router/goToGame', gameId, { root: true })
    },
    async join({ dispatch }, { id: gameId }) {
      await dispatch('router/goToGame', gameId, { root: true })
    },
    async enterGame({ getters, dispatch, commit }) {
      if (!getters.gameId) return
      const game = await emit('join game', getters.gameId)
      if (game) commit('setCurrent', game)
      else return dispatch('router/goToHome', null, { root: true })
    },
  },
}