import { Button } from 'antd';
import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfoList from '../../../common/components/InfoList';
import { AppStore } from '../../../common/types';
import { changeToInfoModal } from '../../actions';
import { RECORD_TYPES, RECORD_TYPES_VALUES } from '../../constants';

import styles from './infoRecordForm.module.scss';

const InfoRecordModal = () => {
  const recordInfoModal = useSelector((state: AppStore) => state.recordInfoModal);
  const dispatch = useDispatch();

  const getRecordTypes = (type: string) => {
    switch (type) {
      case RECORD_TYPES.MANICURE:
        return RECORD_TYPES_VALUES.MANICURE;
      case RECORD_TYPES.PEDICURE:
        return RECORD_TYPES_VALUES.PEDICURE;
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
              changeToInfoModal({
                isOpen: false,
                data: '',
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
