'use strict'

var loaderUtils = require('loader-utils')

function compile () {
  return '111111'
}

/**
 * webpack loader
 *
 * @param {String|Buffer} input JavaScript string
 * @param {Object} map input source map
 * @return {void}
 */
module.exports = function (source, map) {
  console.log(loaderUtils)
  var options = loaderUtils.getOptions(this) || {}
  console.log(options)
  var exports = compile(source)
  console.log(exports)
  throw new Error('3333333333333333333333')
}
