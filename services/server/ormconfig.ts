// import settings from 'settings';
import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

const isProduction = process.env.NODE_ENV === 'production';
const requiredEnvVariables = [
  'POSTGRES_PASSWORD',
  'POSTGRES_USER',
  'POSTGRES_DB',
  'POSTGRES_HOST',
];

if (!isProduction) {
  dotenv.config({ path: path.join(__dirname, '/../../.env') });
}

const missingEnvs = requiredEnvVariables.filter(env => !process.env[env]);

if (missingEnvs.length) {
  throw Error(
    `Please set up necessary env variables: ${missingEnvs.join(', ')}`,
  );
}

const typeOrmConfig: ConnectionOptions = {
  type: 'postgres',
  port: 5432,
  password: process.env.POSTGRES_PASSWORD,
  username: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: [path.join(__dirname, './src/dbMigrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/dbMigrations',
  },
  synchronize: false,
};

export = typeOrmConfig;
