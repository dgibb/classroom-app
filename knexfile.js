module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/app',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
}
