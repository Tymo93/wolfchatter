module.exports = {
  name: 'default',
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.js'],
  migrations: ['src/migration/**/*.js'],
  cli: {
    entitiesDir: 'src/entity/',
    migrationsDir: 'src/migration'
  }
}
