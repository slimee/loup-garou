import TWEEN from '@tweenjs/tween.js'

export default {
  namespaced: true,
  state: {
    camera: {
      zoom: 1,
      panx: null,
      pany: null,
    },
    window: {
      width: null,
      height: null,
    },
  },
  mutations: {
    lookAt: (state, point) => {
      state.camera.panx = point.x
      state.camera.pany = point.y
    },
    resizeWindow: (state, { innerWidth, innerHeight }) => {
      state.window.width = innerWidth
      state.window.height = innerHeight
    },
  },
  actions: {
    lookAt: ({ state, commit, dispatch }, { x = state.camera.panx, y = state.camera.pany, direct = false }) => {
      const current = { x: state.camera.panx, y: state.camera.pany }
      const dest = { x, y }
      const duration = Math.min(1000, Math.max(150, Math.abs(dest.x - current.x)))
      if (direct || state.camera.panx === null && state.camera.pany === null) {
        commit('lookAt', dest)
      } else {
        new TWEEN.Tween(current)
          .to(dest, duration)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(() => commit('lookAt', current))
          .onComplete(() => dispatch('lookAtNearestValid'))
          .start()
      }
    },
    resizeWindow: ({ commit }, window) => commit('resizeWindow', window),
  },
  getters: {
    viewBox: s => {
      const width = s.camera.zoom * s.window.width
      const height = s.camera.zoom * s.window.height
      const x = s.camera.panx - 0.5 * width
      const left = x
      const y = s.camera.pany - 0.5 * height
      const top = y
      const centerX = s.camera.panx
      const centerY = s.camera.pany
      const right = x + width
      const bottom = y + height
      return {
        left, top, x, y, centerX, centerY, width, height, right, bottom,
      }
    },
    viewBoxStr: (state, getters) => {
      const viewBox = getters.viewBox
      return `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`
    },
  },
}