import * as path from 'path';
import * as dotenv from 'dotenv';

const isProduction = process.env.NODE_ENV === 'production';
const requiredEnvVariables = [
  'POSTGRES_PASSWORD',
  'POSTGRES_USER',
  'POSTGRES_DB',
  'POSTGRES_HOST',
  'GOOGLE_CLOUD_KEYS_FILE',
  'GOOGLE_CLOUD_BUCKET'
];

if (!isProduction) {
  dotenv.config({ path: path.join(__dirname, '/../../.env') });
}

const missingEnvs = requiredEnvVariables.filter(env => !process.env[env]);

if (missingEnvs.length) {
  throw Error(`Please set up necessary env variables: ${missingEnvs.join(', ')}`);
}

const settings = {
  isProduction,
  postgres : {
    password: process.env.POSTGRES_PASSWORD,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
  },
  googleCloud: {
    keysFileName: process.env.GOOGLE_CLOUD_KEYS_FILE,
    bucket: process.env.GOOGLE_CLOUD_BUCKET
  }
};

export default settings;
