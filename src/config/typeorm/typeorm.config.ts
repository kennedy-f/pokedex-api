import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PostgressConfig } from 'src/config/db/postgres/postgres.config';
import { resolve } from 'path';

const migrationsPath = resolve(__dirname, '../../../src/migrations');

const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: PostgressConfig.host,
  port: PostgressConfig.port,
  username: PostgressConfig.user,
  password: PostgressConfig.password,
  database: PostgressConfig.database,
  migrations: [resolve(migrationsPath, '*')],
  entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  synchronize: true,
  keepConnectionAlive: true,
  maxQueryExecutionTime: 300,
  ssl: Boolean(PostgressConfig.ssl),
  logging: false,
  cli: {
    migrationsDir: migrationsPath,
  },
};

export default TypeOrmConfig;
