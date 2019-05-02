const querystring = require('querystring')

/**
 * The root route.
 *
 * @param {Object} response Response object for responding to the request.
 * @param {String} postData
 */
function start (response, postData) {
  console.log('Request handler `start` was called.')

  // TODO: Remove view code from controller code.
  const body = `<!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8"/>
    </head>
    <body>
      <form action="/upload" method="post">
        <textarea name="text" rows="20" cols="60"></textarea>
        <input type="submit" value="Submit text"/>
      </form>
    </body>
    </html>`

  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write(body)
  response.end()
}

/**
 * The upload route.
 *
 * @param {Object} response Response object for responding to the request.
 * @param {String} postData Received data.
 */
function upload (response, postData) {
  console.log('Request handler `upload` was called.')

  const postedText = querystring.parse(postData).text

  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.write(`You sent: ${postedText}`)
  response.end()
}

exports.start = start
exports.upload = upload
