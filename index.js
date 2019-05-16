const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

/**
 * Provide a root URI we can access.
 */
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/html/index.html`)
})

/**
 * Handle a socket connection.
 */
io.on('connection', (socket) => {
  console.log('A new WebSocket connection has been established.')
})

/**
 * Randomly generate a stock price.
 */
setInterval(() => {
  const stockprice = Math.floor(Math.random() * 1000)
  io.emit('stock price update', stockprice)
}, Math.random() * (1000, 50) + 1000)

/**
 * All ears.
 */
http.listen(8000, () => { console.log('Listening on port 8000.') })
