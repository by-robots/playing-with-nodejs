const http = require('http')
const url  = require('url')

/**
 * Handles an HTTP request.
 *
 * @param {Object} request  The request's details.
 * @param {Object} response The response object.
 */
function handleRequest(request, response) {
  const pathname = url.parse(request.url).pathname
  console.log(`Request for ${pathname} received.`)

  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.write('Hello World')
  response.end()
}

/**
 * Start the HTTP server.
 */
function start() {
  http.createServer(handleRequest).listen(1337)
}

exports.start = start
