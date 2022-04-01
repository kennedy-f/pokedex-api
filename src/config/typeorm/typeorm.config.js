"use strict";
exports.__esModule = true;
var postgres_config_1 = require("../db/postgres/postgres.config");
var path_1 = require("path");
var migrationsPath = (0, path_1.resolve)(__dirname, '../../../src/migrations');
var TypeOrmConfig = {
    type: 'postgres',
    host: postgres_config_1.PostgressConfig.host,
    port: postgres_config_1.PostgressConfig.port,
    username: postgres_config_1.PostgressConfig.user,
    password: postgres_config_1.PostgressConfig.password,
    database: postgres_config_1.PostgressConfig.database,
    migrations: [(0, path_1.resolve)(migrationsPath, '*')],
    entities: [__dirname + '/../../**/*.entity.{js,ts}'],
    synchronize: true,
    keepConnectionAlive: true,
    maxQueryExecutionTime: 300,
    ssl: Boolean(postgres_config_1.PostgressConfig.ssl),
    logging: false,
    cli: {
        migrationsDir: migrationsPath
    }
};
exports["default"] = TypeOrmConfig;
