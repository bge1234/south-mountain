module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/south_mountain'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
