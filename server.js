'use strict'

const http = require('http')
const url = require('url')
const querystring = require('querystring')

/**
 * Receives a requests, provides a deliberately delayed response to simulate
 * HTTP requests.
 */
http.createServer((request, response) => {
  // Get request details.
  const pathname = url.parse(request.url).pathname
  const query = url.parse(request.url).query
  const id = querystring.parse(query)['id']

  // Build the response for the server to send.
  const result = {
    'pathname': pathname,
    'id': id,
    'value': Math.floor(Math.random() * 100)
  }

  // Patience, young grasshopper.
  setTimeout(() => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(result))
  }, 2000 + Math.floor(Math.random() * 1000))
}).listen(8080, () => { console.log('I\'m listening.') })
