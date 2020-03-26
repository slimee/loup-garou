import { version } from '../../package.json'
import io from 'socket.io-client'

const socketUrl = process.env.NODE_ENV === 'production'
  ? 'https://loo-gawoo.herokuapp.com'
  : '/'

export default {
  namespaced: true,
  state: {
    version,
  },
  mutations: {},
  actions: {
    async mount({ dispatch }) {
      console.log('connecting to', socketUrl)
      const socket = io(socketUrl)
      socket.on('connect', function () {
        console.log('connected')
        socket.emit('add user', 'toto')
      })
      socket.on('user joined', (data) => {
        console.log(data, 'user joined')
      })
      socket.on('login', (data) => {
        //connected = true;
        console.log('Welcome to Socket.IO Chat – ', data)
      })

      socket.on('new message', (data) => {
        console.log('chat', data)
      })

      socket.on('user left', (data) => {
        console.log(data, ' left')
      })

      socket.on('typing', (data) => {
        console.log('typing', data)
      })

      socket.on('stop typing', (data) => {
        console.log('stop typing', data)
      })

      socket.on('disconnect', () => {
        console.log('you have been disconnected')
      })

      socket.on('reconnect', () => {
        console.log('you have been reconnected')
        if (username) {
          socket.emit('add user', 'toto')
        }
      })

      socket.on('reconnect_error', () => {
        console.log('attempt to reconnect has failed')
      })
    },
  },
  getters: {},
}