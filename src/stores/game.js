import { emit, when } from '../services/socket'
import uuid from '../services/uuid'

export default {
  namespaced: true,
  state: {
    current: null,
    joined: null,
    games: [],
  },
  mutations: {
    addPlayer(state, join) {
      const { game: gameToMutate, player: playerToAdd } = join
      const existingGame = state.games.find(game => game.id === gameToMutate.id)
      if (!existingGame) return console.log(`game not found ${gameToMutate.id}`)

      const existingPlayer = existingGame.players.find(player => player.id === playerToAdd.id)
      if (existingPlayer) return console.log(`player already here ${existingPlayer.name}`)
      else existingGame.players.push(playerToAdd)
    },
    addGame(state, game) {
      state.games.push(game)
    },
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
    players(state) {
      return state.current.players
    },
  },
  actions: {
    init({ commit }) {
      when('join game', (join) => {
        if (!join.game || !join.player) console.warn('invalid join game received', join)
        else commit('addPlayer', join)
      })
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
      if (game && game.id) {
        commit('addGame', game)
        commit('setCurrent', game)
      } else {
        return dispatch('router/goToHome', null, { root: true })
      }
    },
  },
}