import io from 'socket.io-client'
const hideEvents = ['list games']
const url = process.env.NODE_ENV === 'production' ? 'https://loo-gawoo.herokuapp.com' : '/'

const socket = io(url)
const emit = (event, payload) => new Promise(resolve => {
  !hideEvents.includes(event) && console.log('emit:', event, socket.id)
  !hideEvents.includes(event) && payload && console.log('request:', payload)
  socket.emit(event, payload, (response) => {
    !hideEvents.includes(event) && response && console.log('response:', response)
    resolve(response)
  })
})
const when = (event, callback) => socket.on(event, (...args) => {
  console.log('receive:', event, socket.id)
  return callback(...args)
})

export {
  socket, emit, when,
}