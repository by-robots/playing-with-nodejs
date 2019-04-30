const http = require('http')

/**
 * Handles an HTTP request.
 *
 * @param {Object} request  The request's details.
 * @param {Object} response The response object.
 */
function handleRequest(request, response) {
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
