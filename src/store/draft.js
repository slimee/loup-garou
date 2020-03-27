socket.on('login', (data) => {
  //connected = true;
  console.log('login', data)
})

socket.on('new message', (data) => {
  console.log('new message', data)
})

socket.on('user left', (data) => {
  console.log('user left', data)
})

socket.on('typing', (data) => {
  console.log('typing', data)
})

socket.on('stop typing', (data) => {
  console.log('stop typing', data)
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