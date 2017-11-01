require('dotenv').config();

module.exports = {
  dev: {
    client: 'pg',
    connection: 'postgres://postgres:postgres@localhost/lunch-db'
  },
  test: {
    client: 'pg',
    connection: 'postgres://postgres:postgres@localhost/lunch-db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};