import router from '../plugins/router'

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async goToGame({ dispatch }, gameId) {
      await router.push({ name: 'game', params: { gameId } })
      await dispatch('game/enterGame', null, { root: true })
    },
    goToHome({}) {
      router.push({ name: 'home' })
    },
  },
}