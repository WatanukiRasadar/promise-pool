'use strict'

const Pool = require('./src/promise-pool')

const map = async (items, callback) => {
  return Pool.for(items).process(callback)
}

module.exports = Pool
module.exports.map = map
module.exports.default = module.exports
