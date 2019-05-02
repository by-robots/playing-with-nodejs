/**
 * Handles HTTP request routing.
 *
 * @param {Object} handle   Map of route => handlers.
 * @param {String} pathname The pathname of the current request.
 * @param {Object} response For responding to the request.
 * @param {String} postData Received data.
 */
function route (handle, pathname, response, postData) {
  console.log(`About to route a request for ${pathname}`)

  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData)
    return
  }

  console.log(`No request handler for ${pathname}`)

  response.writeHead(404, { 'Content-Type': 'text/plain' })
  response.write('404 Not Found')
  response.end()
}

exports.route = route
