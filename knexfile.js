// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/publications',
    connection: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
    }






};
