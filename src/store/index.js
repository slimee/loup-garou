import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import player from './player'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    player,
  },
})
