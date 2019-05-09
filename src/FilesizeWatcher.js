'use strict'

const fs = require('fs')

/**
 * Watches a file for filesize changes.
 *
 * @param {String} path Path to the file to watch.
 */
const FilesizeWatcher = function (path) {
  const self = this
  self.callbacks = {}

  // Path must be absolute, so check it starts with a slash.
  if (/^\//.test(path) === false) {
    process.nextTick(() => {
      self.callbacks['error']('Path does not start with a slash')
    })

    return
  }

  // Set an initial filesize which we can compare against later.
  fs.stat(path, (err, stats) => {
    if (err) {
      // TODO: Handle error.
    }

    self.lastFilesize = stats.size
  })

  // Ever second check for a filesize change.
  self.interval = setInterval(() => {
    fs.stat(path, (err, stats) => {
      if (err) {
        // TODO: Handle error.
      }

      // File got bigger.
      if (stats.size > self.lastFilesize) {
        self.callbacks['grew'](stats.size - self.lastFilesize)
        self.lastFilesize = stats.size
      }

      // File got smaller.
      if (stats.size < self.lastFilesize) {
        self.callbacks['shrank'](self.lastFilesize - stats.size)
        self.lastFilesize = stats.size
      }
    })
  }, 1000)
}

/**
 * Add the on method which will allow us to watch for events being triggered.
 *
 * @param {String} eventType The event name.
 * @param {Callback} callback The code to execute when the event fires.
 */
FilesizeWatcher.prototype.on = function (eventType, callback) {
  this.callbacks[eventType] = callback
}

/**
 * Stop periodically checking for filesize changes.
 */
FilesizeWatcher.prototype.stop = function () {
  clearInterval(this.interval)
}

module.exports = FilesizeWatcher
