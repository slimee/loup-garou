import { version } from '../../package.json'
import io from 'socket.io-client'

export default {
  namespaced: true,
  state: {
    version,
  },
  mutations: {},
  actions: {
    async mount({ dispatch }) {
      const socket = io("/");
      socket.on('connect', function(){
        console.log("connected");
      });
      socket.on('event', function(data){
        console.log("event", data);
      });
      socket.on('disconnect', function(){
        console.log("disconnected");
      });
    },
  },
  getters: {},
}