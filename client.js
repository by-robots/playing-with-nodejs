'use strict'

// Require packages.
const async = require('async')
const request = require('request')

/**
 * Pseudo request a username.
 *
 * @param {Callable} callback Function to execute after the request is finished.
 */
const getUsername = function (callback) {
  request.get('http://localhost:8080/getUserName?id=1234', (err, res, body) => {
    if (err) {
      // TODO: Handle errors.
    }

    const result = JSON.parse(body)
    callback(err, result.value)
  })
}

/**
 * A second request, called asyncronously, that pretends to get the status of a
 * user.
 *
 * @param {Callable} callback Function to execute after the request is finished.
 */
const getUserStatus = function (callback) {
  request.get('http://localhost:8080/getUserStatus?id=1234', (err, res, body) => {
    if (err) {
      // TODO: Handle errors.
    }

    const result = JSON.parse(body)
    callback(err, result.value)
  })
}

/**
 * Execute both functions in parallel before dealing with the responses.
 */
async.parallel([getUsername, getUserStatus], (err, results) => {
  if (err) {
    // TODO: You guessed it...
  }

  console.log(`The status of ${results[0]} is ${results[1]}.`)
})

/**
 * Example response of `time node client.js`
 *
 * The status of 81 is 89.
 * node client.js  0.19s user 0.04s system 9% cpu 2.462 total
 */
