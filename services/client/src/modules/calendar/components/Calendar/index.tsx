import React from 'react';
import Schedule from '../../../common/components/Schedule';
import styles from './calendar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal, setCalendarBeginDate } from '../../actions';
import { Record, RootState } from '../../types';
import moment from 'moment';
import CreateRecordModal from '../CreateRecordModal';

const Calendar = () => {
  const records = useSelector((state: RootState) => state.records);
  const calendar = useSelector((state: RootState) => state.calendar);
  const dispatch = useDispatch();

  return (
    <div className={styles.scheduleWrapper}>
      <Schedule 
        scheduleSettings={calendar.scheduleSettings} 
        scheduleData={records} 
        onResetDate={() => dispatch(setCalendarBeginDate(moment()))}
        onChangeDate={(amount: number) => dispatch(setCalendarBeginDate(calendar.scheduleSettings.currentDate.add(amount, 'days')))}
        onFreeClick={(data: string, time: string) => dispatch(changeModal(
          {type: 'OPEN_FORM_MODAL', payload: {
            isOpen: true,
            data: data + ' ' + time
          }}))}
        onBusyClick={(record: Record) => changeModal(
          {type: 'OPEN_INFO_MODAL', payload: {
            isOpen: true,
            data: record
          }})}/>
          
        <CreateRecordModal />
    </div>
  )
}

export default Calendar;