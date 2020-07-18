const { Pool } = require('pg')
const pgPoolConfig = require('../../../configs/databaseConfig')
const pool = new Pool(pgPoolConfig.Pool)
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}