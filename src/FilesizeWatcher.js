'use strict'

const fs = require('fs')
const util = require('util')
const EventEmitter = require('events').EventEmitter

/**
 * Watches a file for filesize changes.
 *
 * @param {String} path Path to the file to watch.
 */
const FilesizeWatcher = function (path) {
  const self = this

  // Path must be absolute, so check it starts with a slash.
  if (/^\//.test(path) === false) {
    process.nextTick(() => {
      this.emit('error', 'Path does not start with a slash')
    })

    return
  }

  // Set an initial filesize which we can compare against later.
  fs.stat(path, (err, stats) => {
    if (err) {
      // TODO: Handle error.
    }

    this.lastFilesize = stats.size
  })

  // Ever second check for a filesize change.
  self.interval = setInterval(() => {
    fs.stat(path, (err, stats) => {
      if (err) {
        // TODO: Handle error.
      }

      // File got bigger.
      if (stats.size > this.lastFilesize) {
        this.emit('grew', stats.size - this.lastFilesize)
        this.lastFilesize = stats.size
      }

      // File got smaller.
      if (stats.size < this.lastFilesize) {
        this.emit('shrank', this.lastFilesize - stats.size)
        this.lastFilesize = stats.size
      }
    })
  }, 1000)
}

// Make FilesizeWatcher inherit events.EventEmitter
util.inherits(FilesizeWatcher, EventEmitter)

/**
 * Stop periodically checking for filesize changes.
 */
FilesizeWatcher.prototype.stop = function () {
  clearInterval(this.interval)
}

module.exports = FilesizeWatcher
