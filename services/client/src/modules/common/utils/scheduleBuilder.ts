import { ScheduleSettings, ScheduleData } from '../../calendar/types';

export const scheduleBuilder = (scheduleSettings: ScheduleSettings) => {
  let schedule: ScheduleData = {};
  for (let range = 0; range !== scheduleSettings.dateRange; range++) {
    let arrayOfTime: any = [];
    for (
      let time = scheduleSettings.startTime.clone();
      time.format('HH:mm') <= scheduleSettings.endTime.format('HH:mm');
      time.add(scheduleSettings.timeRange, 'hours')
    ) {
      arrayOfTime.push({
        time: time.format('HH:mm'),
        status: 'FREE',
        type: '',
      });
    }

    schedule[
      `${scheduleSettings.currentDate.clone().add(range, 'days').format('YYYY.MM.DD')}`
    ] = arrayOfTime;
  }

  return schedule;
};
