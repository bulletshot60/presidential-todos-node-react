import type { Knex } from "knex";
import { default as nodeConfig } from 'config';

const config: { [key: string]: Knex.Config } = {
  local: {
    client: "postgresql",
    connection: {
      database: nodeConfig.get("database.name"),
      user: nodeConfig.get("database.user"),
      password: nodeConfig.get("database.pass"),
      host: nodeConfig.get("database.host"),
      port: nodeConfig.get("database.port")
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

module.exports = config;