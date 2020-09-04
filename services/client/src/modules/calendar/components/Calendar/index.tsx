import React from 'react';
import moment from 'moment';
import Schedule from '../../../common/components/Schedule';
import styles from './calendar.module.scss';

const scheduleSettings = {
  currentDate: moment(),
  dateRange: 10,
  startTime: moment().clone().set('hour', 9).set('minute', 0o0),
  endTime: moment().clone().set('hour', 17).set('minute', 0o0),
  timeRange: 3
}

const Calendar = () => {
  return (
    <div className={styles.scheduleWrapper}>
      <Schedule scheduleSettings={scheduleSettings}/>
    </div>
  )
}

export default Calendar;