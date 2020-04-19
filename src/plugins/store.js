import Vue from 'vue'
import Vuex from 'vuex'
import app from '../stores/app'
import player from '../stores/player'
import socket from '../stores/socket'
import chat from '../stores/chat'
import game from '../stores/game'
import router from '../stores/router'
import view from '../stores/view'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    router,
    player,
    socket,
    chat,
    game,
    view,
  },
  getters: {
    me: (state) => state.player.player,
  },
})
