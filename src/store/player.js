export default {
  namespaced: true,
  state: {
    selectedName: '',
  },
  mutations: {
    selectName(state, name) {
      state.selectedName = name
    },
  },
  actions: {
    selectName({ commit, dispatch }, name) {
      commit('selectName', name)
      dispatch('app/login', name, { root: true })
    },
  },
  getters: {
    unknown: (state) => !state.selectedName,
  },
}