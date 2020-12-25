import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../actions';
import { TABS } from '../../constants';
import { CalendarStore } from '../../types';
import CreateRecordForm from '../CreateRecordForm';
import CreatePersonForm from '../CreatePersonForm';
import styles from './createRecordForm.module.scss';
import { Button } from 'antd';
import classNames from 'classnames';
import moment from 'moment';

const CreateRecordModal = () => {
  const recordFormModal = useSelector((state: CalendarStore) => state.recordFormModal);
  const activeTab = useSelector((state: CalendarStore) => state.recordFormModalActiveTab);
  const dispatch = useDispatch();

  const getForm = () => {
    switch (activeTab) {
      case TABS.CREATE_PERSON_FORM:
        return <CreatePersonForm dispatch={dispatch} />;
      case TABS.CREATE_RECORD_FORM:
        return (
          <div>
            <div className={styles.title}>{`Запись: ${moment(
              new Date(recordFormModal.data.split(' ')[0]),
            ).format('DD.MM.YY')} на ${recordFormModal.data.split(' ')[1]}`}</div>
            <br />
            <CreateRecordForm dispatch={dispatch} />
          </div>
        );
      default:
        return null;
    }
  };

  return recordFormModal.isOpen ? (
    <div className={styles.modalWrapper}>
      <div className={styles.buttonsWrapper}>
        <Button
          className={classNames(styles.button, {
            [styles.buttonChecked]: TABS.CREATE_RECORD_FORM === activeTab,
          })}
          onClick={() =>
            dispatch(
              setActiveTab({
                type: 'CREATE_RECORD_FORM',
                payload: TABS.CREATE_RECORD_FORM,
              }),
            )
          }
        >
          Создать запись
        </Button>

        <Button
          className={classNames(styles.button, {
            [styles.buttonChecked]: TABS.CREATE_PERSON_FORM === activeTab,
          })}
          onClick={() =>
            dispatch(
              setActiveTab({
                type: 'CREATE_PERSON_FORM',
                payload: TABS.CREATE_PERSON_FORM,
              }),
            )
          }
        >
          Создать клиента
        </Button>
      </div>

      {getForm()}
    </div>
  ) : null;
};

export default CreateRecordModal;
