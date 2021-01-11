import * as moment from 'moment';
import settings from 'settings';
import { Record } from '../entity/record.entity';

const Telegraf = require('telegraf');
const app = new Telegraf(settings.telegramMsgSettings.botId);

export const telegramMesenger = (record: Record): void => {
  app.telegram.sendMessage(
    settings.telegramMsgSettings.chatId,
    `Новая запись: \n Клиент: ${record.person.lastName} ${
      record.person.firstName
    } \n Телефон: ${record.person.phoneNumber} \n Время: ${moment(
      record.date,
    ).format('DD.MM.YYYY')} на ${moment(record.date)
      .subtract(3, 'hours')
      .format('LT')} \n Процедура: ${
      record.type === 'MANICURE' ? 'Маникюр' : 'Педикюр'
    }`,
  );
};
