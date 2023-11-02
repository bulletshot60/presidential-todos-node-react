const config = require('config');

export const pg = require('knex')({
    client: 'pg',
    connection: {
        host: config.get("database.host"),
        port: config.get("database.port"),
        user: config.get("database.user"),
        database: config.get("database.name"),
        password: config.get("database.pass"),
        ssl: config.get("database.ssl") ? { rejectUnauthorized: false } : false,
    }
});