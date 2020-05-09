import { emit } from '../services/socket'

export default {
  namespaced: true,
  state: {
    games: [],
  },
  mutations: {
    setGames(state, games) {
      state.games = games
    },
  },
  actions: {
    async list({ commit }) {
      const { games } = await emit('list games')
      commit('setGames', games)
    },
  },
}