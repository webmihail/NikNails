import settings from './settings';

const typeOrmConfig = {
  type: 'postgres',
  host: settings.postgres.host,
  port: 5432,
  username: settings.postgres.user,
  password: settings.postgres.password,
  database: settings.postgres.database,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations'
  },
  synchronize: true,
}

export default typeOrmConfig;