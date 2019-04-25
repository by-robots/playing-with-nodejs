const http = require('http')

http.createServer((request, response) => {
  console.log('Request received.')
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.write('Hello World')
  response.end()
}).listen(1337)

console.log('Server running.')
