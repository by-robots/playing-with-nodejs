'use strict'

const request = require('request')

request.get('http://localhost:8080/getUserName?id=1234', (err, res, body) => {
  if (err) {
    // TODO: Handle errors.
  }

  const result = JSON.parse(body)
  const name = result.value

  // A second request called after the first has completed.
  request.get('http://localhost:8080/getUserStatus?id=1234', (err, res, body) => {
    if (err) {
      // TODO: Handle errors.
    }

    const result = JSON.parse(body)
    const status = result.value

    console.log(`The status of user ${name} is ${status}.`)
  })
})

/**
 * Example response of `time node client.js`
 *
 * The status of user 85 is 96.
 * node client.js  0.28s user 0.08s system 7% cpu 4.885 total
 */
