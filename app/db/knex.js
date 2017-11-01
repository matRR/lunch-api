const env = process.env.NODE_ENV || 'dev';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

module.exports = knex;