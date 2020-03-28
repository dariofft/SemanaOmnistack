module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/Database/db.sqlite'
    },
    migrations: {
      directory: './src/Database/migrations'
    },
    userNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'hero',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
