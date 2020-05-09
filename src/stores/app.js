import { version } from '../../package.json'

export default {
  namespaced: true,
  state: {
    version,
  },
  mutations: {},
  actions: {
    async mount({ dispatch }) {
      await dispatch('socket/init', null, { root: true })
      await dispatch('autologin')
      await dispatch('chat/init', null, { root: true })
      await dispatch('player/init', null, { root: true })
      await dispatch('game/init', null, { root: true })
      await dispatch('game/joinGame', null, { root: true })
    },
    async autologin({ dispatch }) {
      const player = JSON.parse(localStorage.getItem('player'))
      if (player) {
        await dispatch('player/login', player, { root: true })
      } else {
        console.log('no player from storage')
      }
    },
  },
}