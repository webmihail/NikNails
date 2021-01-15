import * as path from 'path';
import * as dotenv from 'dotenv';

const isProduction = process.env.NODE_ENV === 'production';
const requiredEnvVariables = [
  'TELEGRAM_BOT_ID',
  'TELEGRAM_CHAT_ID',
  'GOOGLE_CLOUD_KEYS_FILE',
  'GOOGLE_CLOUD_BUCKET',
  'JWT_TOKEN'
];

if (!isProduction) {
  dotenv.config({ path: path.join(__dirname, '/../../../.env') });
}

const missingEnvs = requiredEnvVariables.filter(env => !process.env[env]);

if (missingEnvs.length) {
  throw Error(`Please set up necessary env variables: ${missingEnvs.join(', ')}`);
}

const settings = {
  isProduction,
  googleCloud: {
    keysFileName: process.env.GOOGLE_CLOUD_KEYS_FILE,
    bucket: process.env.GOOGLE_CLOUD_BUCKET
  },
  telegramMsgSettings: {
    botId: process.env.TELEGRAM_BOT_ID,
    chatId: process.env.TELEGRAM_CHAT_ID
  },
  jwtProps: {
    secret: process.env.JWT_TOKEN
  }
};

export default settings;
