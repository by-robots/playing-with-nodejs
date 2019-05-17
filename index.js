const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

/**
 * Provide a route we can access.
 */
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/html/index.html`)
})

/**
 * Handle a socket connection.
 */
io.on('connection', (socket) => {
  console.log('A new WebSocket connection has been established.')

  /**
   * Receive data from the client through the socket. When we receive a stock
   * price share emit an event to all clients with the shared price.
   */
  socket.on('stock price share', (data) => {
    io.emit('stock price shared', data)
  })
})

/**
 * Randomly generate a stock price every 1 - 2 seconds.
 */
setInterval(() => {
  const stockprice = Math.floor(Math.random() * 1000)
  io.emit('stock price update', stockprice)
}, Math.random() * (2000, 1000) + 1000)

/**
 * Start the server and listen for connections.
 */
http.listen(8000, () => {
  console.log('Listening on port 8000.')
})
