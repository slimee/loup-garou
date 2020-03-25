import { version } from '../../package.json'
import io from 'socket.io-client'

const socketUrl = process.env.API_URL || 'http://localhost:3000'
export default {
  namespaced: true,
  state: {
    version,
  },
  mutations: {},
  actions: {
    async mount({ dispatch }) {
      const socket = io(socketUrl);
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