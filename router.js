/**
 * Handles HTTP request routing.
 *
 * @param {Object} handle   Map of route => handlers.
 * @param {String} pathname The pathname of the current request.
 * @param {Object} response For responding to the request.
 */
function route (handle, pathname, response) {
  console.log(`About to route a request for ${pathname}`)

  if (typeof handle[pathname] === 'function') {
    handle[pathname](response)
    return
  }

  console.log(`No request handler for ${pathname}`)
  response.writeHead(404, { 'Content-Type': 'text/plain' })
  response.write('404 Not Found')
  response.end()
}

exports.route = route
