// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'pg',
      port: '5432',
      database: 'catalog',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10,
      propagateCreateError: false
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
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
      host: 'pg',
      port: '5432',
      database: 'catalog',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10,
      propagateCreateError: false
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

};
