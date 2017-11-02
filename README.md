[![Build Status](https://travis-ci.org/matRR/lunch-api.svg?branch=master)](https://travis-ci.org/matRR/lunch-api)

# Getting started

## Prerequisites

- Node
- PostgresSQL (You can also get away without local Postgres by using services 
like [Heroku](https://www.heroku.com), check their [docs](https://www.heroku.com/postgres) for more details.)

## Installing

- Clone this repository
- Create empty Postgres DB (on Windows you can use [PgAdmin](https://www.openscg.com/bigsql/pgadmin3/) or use [Heroku](https://www.heroku.com) or other cloud solution)
- Configure database connection string in [app/knexfile.js](app/knexfile.js)
- `npm install`
- Install global knex (used for database migrations) 
`npm install knex`
- Migrate database (see [Migration](#database-migration) section)
- `npm start` or `npm start:watch` to restart the server on any change in the source code

Your local dev server is now up and running 

## Testing
- `npm test` or `npm run test:watch` to restart the tests on any change in the source code

## Database Migration

### Schema

- Go to app folder `cd app`
- run `knex migrate:latest`

### Seed data

- Go to `app` folder
`cd app`
- `knex seed:run`

# Docs

API documentation is build with [apiDoc](http://apidocjs.com/) and hosted on [surge.sh](https://surge.sh/). You can read the docs [here](http://lunch-api-doc.surge.sh/).

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details