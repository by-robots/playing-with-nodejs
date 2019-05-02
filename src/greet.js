'use strict'

/**
 * Greet someone (by name, if name is supplied).
 *
 * @param {String} name The name to greet.
 *
 * @return {String} The greeting.
 */
const greet = function (name) {
  name = name || 'world'
  return `Hello ${name}!`
}

module.exports = greet
