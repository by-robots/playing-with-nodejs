/**
 * Handles HTTP request routing.
 *
 * @param {Object} handle   Map of route => handlers.
 * @param {String} pathname The pathname of the current request.
 */
function route (handle, pathname) {
  console.log(`About to route a request for ${pathname}`)

  if (typeof handle[pathname] === 'function') {
    handle[pathname]()
  } else {
    console.log(`No request handler for ${pathname}`)
  }
}

exports.route = route
