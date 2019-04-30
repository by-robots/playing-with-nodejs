const http = require('http')
const url = require('url')

/**
 * Start the HTTP server.
 *
 * @callback route Callback to handle the app's routing.
 */
function start (route) {
  /**
   * Handles an HTTP request.
   *
   * @param {Object} request  The request's details.
   * @param {Object} response The response object.
   */
  function handleRequest (request, response) {
    const pathname = url.parse(request.url).pathname
    route(pathname)

    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello World')
    response.end()
  }

  // Create the server and start listening for requests.
  http.createServer(handleRequest).listen(1337)
}

exports.start = start
