const http = require('http')
const url = require('url')

/**
 * Start the HTTP server.
 *
 * @callback route Callback to handle the app's routing.
 * @param {Object} handle Route => Handler mapping
 */
function start (route, handle) {
  http.createServer((request, response) => {
    const pathname = url.parse(request.url).pathname
    let postData = ''

    request.setEncoding('utf8')

    // Receive a chunk of POST data. Yummy.
    request.addListener('data', (postDataChunk) => {
      postData += postDataChunk
      console.log(`Received POST data chunk: ${postDataChunk}.`)
    })

    // All data has been received.
    request.addListener('end', () => {
      route(handle, pathname, response, postData)
    })
  }).listen(1337)
}

exports.start = start
