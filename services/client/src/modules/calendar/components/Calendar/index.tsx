import React from 'react';
import Schedule from '../../../common/components/Schedule';
import styles from './calendar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal, setActiveTab, setCalendarBeginDate } from '../../actions';
import { Record, RootState } from '../../types';
import moment from 'moment';
import CreateRecordModal from '../CreateRecordModal';
import { TABS } from '../../constants/Tabs';

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
        onFreeClick={(data: string, time: string) => {
          dispatch(changeModal({type: 'CHANGE_FORM_MODAL', payload: {
            isOpen: true,
            data: data + ' ' + time
          }}))

          dispatch(setActiveTab({
            type: 'CREATE_PERSON_FORM',
            payload: TABS.CREATE_PERSON_FORM
          }))
        }}
        onBusyClick={(record: Record) => changeModal(
          {type: 'CHANGE_INFO_MODAL', payload: {
            isOpen: true,
            data: record
          }})}/>
          
        <CreateRecordModal />
    </div>
  )
}

export default Calendar;