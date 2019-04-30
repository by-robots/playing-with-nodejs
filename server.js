const http = require('http')
const url = require('url')

/**
 * Start the HTTP server.
 *
 * @callback route        Callback to handle the app's routing.
 * @param {Object} handle Route => Handler mapping
 */
function start (route, handle) {
  http.createServer((request, response) => {
    const pathname = url.parse(request.url).pathname
    route(handle, pathname)

    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello World')
    response.end()
  }).listen(1337)
}

exports.start = start
