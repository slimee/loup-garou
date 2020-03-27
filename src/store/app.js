import { version } from '../../package.json'

export default {
  namespaced: true,
  state: {
    version,
    status,
  },
  mutations: {
    setStatus(state, status) {
      state.status = status
    },
  },
  actions: {
    async mount({ dispatch }) {
      await dispatch('socket/bind', null, { root: true })
      await dispatch('chat/init', null, { root: true })
      await dispatch('player/init', null, { root: true })
    },
    autologin() {
      const player = JSON.parse(localStorage.getItem('player'))
      if (player) {
        this.dispatch('player/login', player, { root: true })
      } else {
        console.log('no player from storage')
      }
    },
  },
  getters: {},
}