export const PostgressConfig = {
  host: process.env.POSTGRES_HOST || 'localhost',
  port: +process.env.POSTGRES_PORT || 5432,
  database: process.env.POSTGRES_DB || 'poke-database',
  user: process.env.POSTGRES_USER || 'poke-dev',
  password: process.env.POSTGRES_PASSWORD || 'dev',
  ssl: process.env.POSTRGRESS_SSL || false,
};
