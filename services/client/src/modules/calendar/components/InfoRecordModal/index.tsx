import { Button } from 'antd';
import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfoList from '../../../common/components/InfoList';
import { AppStore } from '../../../common/types';
import { changeModal } from '../../actions';

import styles from './infoRecordForm.module.scss';

const InfoRecordModal = () => {
  const recordInfoModal = useSelector((state: AppStore) => state.recordInfoModal);
  const dispatch = useDispatch();

  const getRecordTypes = (type: string) => {
    switch (type) {
      case 'MANICURE':
        return 'Маникюр';
      case 'PEDICURE':
        return 'Педикюр';
    }
  };

  return recordInfoModal.isOpen ? (
    <div className={styles.modalWrapper}>
      {recordInfoModal.data ? (
        <InfoList
          title={`Запись ${moment(recordInfoModal.data.time).format('DD.MM.YYYY')} на ${moment(
            recordInfoModal.data.time,
          )
            .subtract(3, 'hours')
            .format('LT')}`}
          items={[
            {
              title: 'Имя',
              description: recordInfoModal.data.person.firstName,
            },
            {
              title: 'Фамилия',
              description: recordInfoModal.data.person.lastName,
            },
            {
              title: 'Услуга',
              description: getRecordTypes(recordInfoModal.data.type),
            },
          ]}
        />
      ) : null}

      <br />

      <div className={styles.buttonWrapper}>
        <Button
          type="primary"
          onClick={() =>
            dispatch(
              changeModal({
                type: 'CHANGE_INFO_MODAL',
                payload: {
                  isOpen: false,
                  data: '',
                },
              }),
            )
          }
        >
          Закрыть
        </Button>
      </div>
    </div>
  ) : null;
};

export default InfoRecordModal;
