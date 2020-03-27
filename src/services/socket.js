import io from 'socket.io-client'

const url = process.env.NODE_ENV === 'production' ? 'https://loo-gawoo.herokuapp.com' : '/'

export default io(url)