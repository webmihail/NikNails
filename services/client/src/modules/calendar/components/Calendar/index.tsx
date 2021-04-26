import React, { useEffect } from 'react';
import Schedule from '../../../common/components/Schedule';
import styles from './calendar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoader, setCalendarBeginDate } from '../../actions';
import moment from 'moment';
import { getAllRecords } from '../../../../api/records';
import { AppStore } from '../../../common/types';
import { localStorageUtil } from '../../../common/utils';
import { changeToFormModal, setRecordsTab } from '../../../records/actions';
import { showLoader } from '../../actions';

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
          dispatch(showLoader());
          setTimeout(() => {
            dispatch(setCalendarBeginDate(moment()));
            dispatch(hideLoader());
          }, 300);
        }}
        onChangeDate={(amount: number) => {
          dispatch(showLoader());
          setTimeout(() => {
            dispatch(
              setCalendarBeginDate(calendar.scheduleSettings.currentDate.add(amount, 'days')),
            );
            dispatch(hideLoader());
          }, 300);
        }}
        onFreeClick={(data: string, time: string) => {
          dispatch(
            changeToFormModal({
              isOpen: true,
              data: data + ' ' + time,
            }),
          );

          dispatch(setRecordsTab());
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
    </div>
  );
};

export default Calendar;
