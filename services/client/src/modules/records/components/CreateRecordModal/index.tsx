import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeToFormModal, setPersonsTab, setRecordsTab } from '../../actions';
import { RECORD_TABS } from '../../constants';
import CreateRecordForm from '../CreateRecordForm';
import CreatePersonForm from '../../../persons/components/CreatePersonForm';
import styles from './createRecordForm.module.scss';
import { Button, Modal } from 'antd';
import classNames from 'classnames';
import moment from 'moment';
import { AppStore } from '../../../common/types';

const CreateRecordModal = () => {
  const recordFormModal = useSelector((state: AppStore) => state.recordFormModal);
  const activeTab = useSelector((state: AppStore) => state.recordFormModalActiveTab);
  const dispatch = useDispatch();

  const getForm = () => {
    switch (activeTab) {
      case RECORD_TABS.CREATE_PERSON_FORM:
        return <CreatePersonForm dispatch={dispatch} />;
      case RECORD_TABS.CREATE_RECORD_FORM:
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

  return (
    <Modal
      centered={true}
      visible={recordFormModal.isOpen}
      onCancel={() => {
        dispatch(setPersonsTab());

        dispatch(
          changeToFormModal({
            isOpen: false,
            data: '',
          }),
        );
      }}
      className={styles.modal}
      closable={false}
      title={false}
      footer={null}
      destroyOnClose={true}
    >
      <div className={styles.modalWrapper}>
        <div className={styles.buttonsWrapper}>
          <Button
            className={classNames(styles.button, {
              [styles.buttonChecked]: RECORD_TABS.CREATE_RECORD_FORM === activeTab,
            })}
            onClick={() => dispatch(setRecordsTab())}
          >
            Создать запись
          </Button>

          <Button
            className={classNames(styles.button, {
              [styles.buttonChecked]: RECORD_TABS.CREATE_PERSON_FORM === activeTab,
            })}
            onClick={() => dispatch(setPersonsTab())}
          >
            Создать клиента
          </Button>
        </div>

        {getForm()}
      </div>
    </Modal>
  );
};

export default CreateRecordModal;
