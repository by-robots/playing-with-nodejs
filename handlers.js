const exec = require('child_process').exec

/**
 * The root route.
 *
 * @param {Object} response Response object for responding to the request.
 */
function start (response) {
  console.log('Request handler `start` was called.')

  exec('ls -lah', (error, stdout, stderr) => {
    const status = error ? 500 : 200
    const body = error ? `Something went wrong: ${error.stack}` : stdout

    response.writeHead(status, { 'Content-Type': 'text/plain' })
    response.write(body)
    response.end()
  })
}

/**
 * The upload route.
 *
 * @param {Object} response Response object for responding to the request.
 */
function upload (response) {
  console.log('Request handler `upload` was called.')
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.write('Hello upload!')
  response.end()
}

exports.start = start
exports.upload = upload
