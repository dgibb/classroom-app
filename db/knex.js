const env = process.env.NODE_ENV || 'development'
const knexConf = require('../knexfile.js')[env]
module.exports = require('knex')(knexConf)
