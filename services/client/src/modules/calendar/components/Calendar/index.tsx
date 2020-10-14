import React, { useEffect } from 'react';
import Schedule from '../../../common/components/Schedule';
import styles from './calendar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal, setActiveTab, setCalendarBeginDate } from '../../actions';
import { Record, RootState } from '../../types';
import moment from 'moment';
import CreateRecordModal from '../CreateRecordModal';
import { TABS } from '../../constants/Tabs';
import { getAllRecords } from '../../../../api/records';
import { setLoading } from '../../actions/loading';
import InfoRecordModal from '../InfoRecordModal';

const Calendar = () => {
  const records = useSelector((state: RootState) => state.records);
  const calendar = useSelector((state: RootState) => state.calendar);
  const loading = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecords());
  }, [dispatch]);

  return (
    <div className={styles.scheduleWrapper}>
      <Schedule
        scheduleSettings={calendar.scheduleSettings}
        loading={loading}
        recordsData={records}
        onResetDate={() => {
          dispatch(setLoading('SHOW_LOADER'));
          setTimeout(() => {
            dispatch(setCalendarBeginDate(moment()));
          }, 300);
        }}
        onChangeDate={(amount: number) => {
          dispatch(setLoading('SHOW_LOADER'));
          setTimeout(() => {
            dispatch(setCalendarBeginDate(calendar.scheduleSettings.currentDate.add(amount, 'days')));
          }, 300);
        }}
        onFreeClick={(data: string, time: string) => {
          dispatch(
            changeModal({
              type: 'CHANGE_FORM_MODAL',
              payload: {
                isOpen: true,
                data: data + ' ' + time,
              },
            }),
          );

          dispatch(
            setActiveTab({
              type: 'CREATE_PERSON_FORM',
              payload: TABS.CREATE_PERSON_FORM,
            }),
          );
        }}
        onBusyClick={(record: Record) =>
          dispatch(
            changeModal({
              type: 'CHANGE_INFO_MODAL',
              payload: {
                isOpen: true,
                data: record,
              },
            }),
          )
        }
      />

      <CreateRecordModal />
      <InfoRecordModal />
    </div>
  );
};

export default Calendar;
