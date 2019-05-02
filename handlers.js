const fs = require('fs')
const formidable = require('formidable')

/**
 * The root route.
 *
 * @param {Object} response Response object for responding to the request.
 */
function start (response) {
  console.log('Request handler `start` was called.')

  // TODO: Remove view code from controller code.
  const body = `<!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8"/>
    </head>
    <body>
      <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="upload"/>
        <input type="submit" value="Upload"/>
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
 * @param {String} request  The request object.
 */
function upload (response, request) {
  console.log('Request handler `upload` was called.')

  const form = new formidable.IncomingForm()
  form.parse(request, (error, fields, files) => {
    if (error) {
      console.log(`There was an error processing the upload: ${error.stack}`)
    }

    fs.rename(files.upload.path, '/tmp/test.png', (error) => {
      // Handle a possible issue on Windows systems that may crop up when
      // attempting to rename the file to a file that already exists.
      if (error) {
        fs.unlink('/tmp/test.png')
        fs.rename(files.upload.path, '/tmp/test.png')
      }
    })

    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write('<img src="/show" alt=""/>')
    response.end()
  })
}

/**
 * Show the uploaded file.
 *
 * @param {Object} response
 */
function show (response) {
  console.log('Request handler `show` was called.')

  response.writeHead(200, { 'Content-Type': 'image/png' })
  fs.createReadStream('/tmp/test.png').pipe(response)
}

exports.show = show
exports.start = start
exports.upload = upload
