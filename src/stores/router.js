import router from '../plugins/router'

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async goToGame({ dispatch }, game) {
      await router.push({ name: 'game', params: { gameId: game.id } })
      await dispatch('game/joinGame', null, { root: true })
    },
    goToHome({}) {
      router.push({ name: 'home' })
    },
  },
}