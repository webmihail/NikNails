import React from 'react';
import { Record, ScheduleSettings, CalendarStore } from '../../../calendar/types';
import { Spin, Button } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import styles from './schedule.module.scss';
import moment from 'moment';
import { scheduleBuilder } from '../../utils';
import { useSelector } from 'react-redux';

interface ScheduleProps {
  recordsData: any;
  scheduleSettings: ScheduleSettings;
  loading: boolean;
  onResetDate: () => void;
  //TODO: Need it when we get OWNER RORE
  // onBusyClick: (record: Record) => void;
  onFreeClick: (data: string, time: string) => void | null;
  onChangeDate: (amount: number) => void;
}

const Schedule = ({
  recordsData,
  scheduleSettings,
  loading = false,
  onResetDate,
  // onBusyClick,
  onFreeClick,
  onChangeDate,
}: ScheduleProps) => {
  const calendar = useSelector((state: CalendarStore) => state.calendar);

  return (
    <Spin spinning={loading} className={styles.spin}>
      <nav className={styles.navigationWrapper}>
        <Button
          className={styles.navigation}
          onClick={() => onChangeDate(-calendar.scheduleSettings.dateRange)}
        >
          <LeftCircleOutlined className={styles.buttonIcon} />
          <div>
            {`${scheduleSettings.currentDate
              .clone()
              .add(-scheduleSettings.dateRange, 'days')
              .format('DD.MM.YY')}
            -
            ${scheduleSettings.currentDate.format('DD.MM.YY')}`}
          </div>
        </Button>

        <Button className={styles.navigation} onClick={() => onResetDate()}>
          {moment().format('DD.MM.YY')}
        </Button>

        <Button
          className={styles.navigation}
          onClick={() => onChangeDate(calendar.scheduleSettings.dateRange)}
        >
          <div>
            {`${scheduleSettings.currentDate
              .clone()
              .add(scheduleSettings.dateRange, 'days')
              .format('DD.MM.YY')} 
            -
            ${scheduleSettings.currentDate
              .clone()
              .add(scheduleSettings.dateRange * 2, 'days')
              .format('DD.MM.YY')}`}
          </div>
          <RightCircleOutlined className={styles.buttonIcon} />
        </Button>
      </nav>

      <div className={styles.scheduleWrapper}>
        {Object.keys(scheduleBuilder(scheduleSettings)).map((key) => {
          return (
            <div className={styles.scheduleItemWrapper} key={key}>
              <div className={styles.date}>{moment(new Date(key)).format('DD.MM.YY')}</div>
              <div className={styles.recordWrapper}>
                {scheduleBuilder(scheduleSettings)[key].map((data: Record) => {
                  if (recordsData && recordsData.length) {
                    const currentDataTime = moment(new Date(key + ' ' + data.time))
                      .add(3, 'hours')
                      .toISOString();
                    const record: Record = recordsData.find(
                      (recordData: Record) => currentDataTime === recordData.time,
                    );

                    if (record) {
                      return (
                        <Button
                          className={styles.busyRecord}
                          key={key + data.time}
                          //TODO: Need it when we get OWNER RORE
                          // onClick={() => onBusyClick(record)}
                        >
                          {data.time}
                        </Button>
                      );
                    } else {
                      return (
                        <Button
                          className={styles.freeRecord}
                          key={key + data.time}
                          onClick={() => onFreeClick(key, data.time)}
                        >
                          {data.time}
                        </Button>
                      );
                    }
                  }

                  return null;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Spin>
  );
};

export default Schedule;
