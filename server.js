const http = require('http')

function start() {
  http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello World')
    response.end()
  }).listen(1337)
}

exports.start = start
