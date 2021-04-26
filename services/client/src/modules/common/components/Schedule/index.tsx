import React from 'react';
import { Record } from '../../../records/types';
import { Spin, Button } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import styles from './schedule.module.scss';
import moment from 'moment';
import { scheduleBuilder } from '../../utils';
import { useSelector } from 'react-redux';
import { AppStore, ScheduleSettings } from '../../types';

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
  const calendar = useSelector((state: AppStore) => state.calendar);

  const converDateForSafari = (key: any) => {
    const formatDateForSafari = moment(key, 'YYYY-MM-DD HH:mm').toISOString();
    const date = moment(new Date(formatDateForSafari)).format('DD.MM').toString();
    return date;
  };

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
              .format('DD.MM')}
            -
            ${scheduleSettings.currentDate.format('DD.MM')}`}
          </div>
        </Button>

        <Button className={styles.navigation} onClick={() => onResetDate()}>
          {moment().format('DD.MM')}
        </Button>

        <Button
          className={styles.navigation}
          onClick={() => onChangeDate(calendar.scheduleSettings.dateRange)}
        >
          <div>
            {`${scheduleSettings.currentDate
              .clone()
              .add(scheduleSettings.dateRange, 'days')
              .format('DD.MM')} 
            -
            ${scheduleSettings.currentDate
              .clone()
              .add(scheduleSettings.dateRange * 2, 'days')
              .format('DD.MM')}`}
          </div>
          <RightCircleOutlined className={styles.buttonIcon} />
        </Button>
      </nav>

      <div className={styles.scheduleWrapper}>
        {Object.keys(scheduleBuilder(scheduleSettings)).map((key) => {
          return (
            <div className={styles.scheduleItemWrapper} key={key}>
              <div className={styles.date}>{converDateForSafari(key)}</div>
              <div className={styles.recordWrapper}>
                {scheduleBuilder(scheduleSettings)[key].map((data: Record) => {
                  if (recordsData && recordsData.length) {
                    const formatDate = moment(key + ' ' + data.time, 'YYYY-MM-DD HH:mm').toDate();
                    const currentDataTime = moment(new Date(formatDate))
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

                  return (
                    <Button
                      className={styles.freeRecord}
                      key={key + data.time}
                      onClick={() => onFreeClick(key, data.time)}
                    >
                      {data.time}
                    </Button>
                  );
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
