module.exports = {
    Pool: {
        user: 'postgres',
        host: 'localhost',
        database: 'api',
        password: 'nodejsPG',
        port: 5432,
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000
    }
  }
  