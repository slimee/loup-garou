import { version } from '../../package.json'
import io from 'socket.io-client'

const socketUrl = process.env.NODE_ENV === 'production'
  ? 'https://loo-gawoo.herokuapp.com'
  : '/'

let socket

export default {
  namespaced: true,
  state: {
    version,
  },
  mutations: {},
  actions: {
    connect({ dispatch }) {
      console.log('connecting to', socketUrl)
      socket = io(socketUrl)
      return new Promise((resolve) => {
        socket.on('connect', function () {
          console.log('connected')
          resolve()
        })
        socket.on('user joined', (data) => {
          console.log('user joined', data)
        })
        socket.on('login', (data) => {
          console.log('login', data)
        })
      })
    },
    login({}, name) {
      socket.emit('login', name)
    },
    async mount({ dispatch }) {
      await dispatch('connect')
    },
  },
  getters: {},
}