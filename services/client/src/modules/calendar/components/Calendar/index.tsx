import React, { useEffect } from 'react';
import Schedule from '../../../common/components/Schedule';
import styles from './calendar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal, setActiveTab, setCalendarBeginDate } from '../../actions';
import moment from 'moment';
import CreateRecordModal from '../CreateRecordModal';
import { getAllRecords } from '../../../../api/records';
import { setLoading } from '../../actions/loading';
import InfoRecordModal from '../InfoRecordModal';
import { AppStore } from '../../../common/types';
import { RECORD_TABS } from '../../constants';
import { localStorageUtil } from '../../../common/utils';

const Calendar = () => {
  const records = useSelector((state: AppStore) => state.records);
  const calendar = useSelector((state: AppStore) => state.calendar);
  const loading = useSelector((state: AppStore) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecords());
    if (new Date().getTime() > localStorageUtil.getStorage('authData')?.expirationDate) {
      localStorageUtil.clearStorage();
    }
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
            dispatch(
              setCalendarBeginDate(calendar.scheduleSettings.currentDate.add(amount, 'days')),
            );
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
              payload: RECORD_TABS.CREATE_PERSON_FORM,
            }),
          );
        }}
        //TODO: Need it when we get OWNER RORE
        // onBusyClick={(record: Record) =>
        //   dispatch(
        //     changeModal({
        //       type: 'CHANGE_INFO_MODAL',
        //       payload: {
        //         isOpen: true,
        //         data: record,
        //       },
        //     }),
        //   )
        // }
      />

      <CreateRecordModal />
      <InfoRecordModal />
    </div>
  );
};

export default Calendar;
