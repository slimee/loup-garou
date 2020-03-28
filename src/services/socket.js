import io from 'socket.io-client'

const url = process.env.NODE_ENV === 'production' ? 'https://loo-gawoo.herokuapp.com' : '/'

const socket = io(url)
const emit = (event, payload) => new Promise(resolve => socket.emit(event, payload, (response) => resolve(response)))
const when = (event, callback) => socket.on(event, callback)

export {
  socket, emit, when,
}