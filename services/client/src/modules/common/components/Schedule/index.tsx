import React from 'react';
import { ScheduleData, Record, ScheduleSettings } from '../../../calendar/types';
import { Spin, Button } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import styles from './schedule.module.scss';
import moment from 'moment';
import { scheduleBuilder } from '../../utils/scheduleBuilder';

interface ScheduleProps {
  scheduleData: ScheduleData;
  scheduleSettings: ScheduleSettings;
  loading: boolean;
  onResetDate: () => void;
  onBusyClick: (record: Record) => void | null;
  onFreeClick: (time: string) => void | null;
  onChangeDate: (amount: number) => void;
}

const Schedule = ({
  scheduleData,
  scheduleSettings,
  loading = false,
  onResetDate,
  onBusyClick,
  onFreeClick,
  onChangeDate
}: any ) => {

  return (
    <Spin spinning={loading}>
      <nav className={styles.navigationWrapper}>
        <Button className={styles.navigation} onClick={() => onChangeDate(-7)}>
          <LeftCircleOutlined className={styles.buttonIcon}/>
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

        <Button className={styles.navigation} onClick={() => onChangeDate(7)}>
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
        {Object.keys(scheduleBuilder(scheduleSettings)).map(key => {
          console.log(scheduleBuilder(scheduleSettings)[key])
          return (
            <div className={styles.scheduleItemWrapper} key={key}>
              <div className={styles.date}>{key}</div>
              <div className={styles.recordWrapper}>
                {scheduleBuilder(scheduleSettings)[key].map((date:Record) => {
                  return (<Button className={styles.record} key={key + date.time}>{date.time}</Button>)
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Spin>
  )
}

export default Schedule;