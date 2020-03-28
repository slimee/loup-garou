import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import player from './player'
import socket from './socket'
import chat from './chat'
import game from './game'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    player,
    socket,
    chat,
    game,
  },
  getters: {
    me: (state) => state.player.player,
  },
})
