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
    setGames(state, games) {
      state.games = games
    },
    setCurrent(state, game) {
      state.current = game
    },
    addPlayer(state, join) {
      const { game: gameToMutate, player: playerToAdd } = join
      if (!state.current) return console.log(`no current game ${gameToMutate.id}`)

      const existingPlayer = state.current.players.find(player => player.id === playerToAdd.id)
      if (existingPlayer) return console.log(`player already here ${existingPlayer.name}`)
      else state.current.players.push(playerToAdd)
    },
  },
  getters: {
    gameId(state, getters, rootState) {
      return rootState.route.params.gameId
    },
    players(state) {
      return state.current.players
    },
    currentCanBeStarted(state) {
      return state.current.phase === 'joining'
    },
  },
  actions: {
    init({ commit }) {
      when('player has joined game', (join) => {
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
      //this line will dispatch joinGame bellow
      dispatch('router/goToGame', { id: gameId }, { root: true })
    },
    async joinGame({ getters, dispatch, commit }) {
      if (!getters.gameId) return
      const game = await emit('join game', getters.gameId)
      if (game && game.id) {
        commit('setCurrent', game)
      } else {
        console.error('join game returns', game)
        return dispatch('router/goToHome', null, { root: true })
      }
    },
    async start({ state }) {
      const result = await emit('start game', state.current.id)
      console.log(result)
    },
  },
}