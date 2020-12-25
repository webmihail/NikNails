import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { clickCounter } from '../../../common/utils/clickCounter';
import styles from './authenticationModal.module.scss';
import classnames from 'classnames';
import { TABS } from '../../constants';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';
import RecoveryPasswordForm from '../RecoveryPasswordForm';
import { useDispatch, useSelector } from 'react-redux';
import { AuthenticationState } from '../../types';
import { setActiveTab } from '../../actions';

const AuthenticationModal = () => {
  const headerLogo = document.querySelector('.header__logo');
  const activeTab = useSelector(
    (state: AuthenticationState) => state.authenticationFormModalActiveTab,
  );
  const dispatch = useDispatch();
  const [isModalOpen, setOpenModal] = useState(false);

  useEffect(() => {
    headerLogo && clickCounter(headerLogo, setOpenModal);
  }, [headerLogo]);

  const getForm = () => {
    switch (activeTab) {
      case TABS.SIGN_IN_FORM:
        return <SignInForm />;
      case TABS.SIGN_UP_FORM:
        return <SignUpForm />;
      case TABS.RECOVERY_PASSWORD_FORM:
        return <RecoveryPasswordForm />;
      default:
        return null;
    }
  };

  return (
    <Modal
      centered={true}
      visible={isModalOpen}
      onCancel={() => {
        dispatch(
          setActiveTab({
            type: 'SIGN_IN_FORM',
            payload: TABS.SIGN_IN_FORM,
          }),
        );

        setOpenModal(false);
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
            className={classnames(styles.button, {
              [styles.buttonChecked]: TABS.SIGN_IN_FORM === activeTab,
            })}
            onClick={() => {
              dispatch(
                setActiveTab({
                  type: 'SIGN_IN_FORM',
                  payload: TABS.SIGN_IN_FORM,
                }),
              );
            }}
          >
            Авторизация
          </Button>
          <Button
            className={classnames(styles.button, {
              [styles.buttonChecked]: TABS.SIGN_UP_FORM === activeTab,
            })}
            onClick={() => {
              dispatch(
                setActiveTab({
                  type: 'SIGN_UP_FORM',
                  payload: TABS.SIGN_UP_FORM,
                }),
              );
            }}
          >
            Регистрация
          </Button>
          <Button
            className={classnames(styles.button, {
              [styles.buttonChecked]: TABS.RECOVERY_PASSWORD_FORM === activeTab,
            })}
            onClick={() => {
              dispatch(
                setActiveTab({
                  type: 'RECOVERY_PASSWORD_FORM',
                  payload: TABS.RECOVERY_PASSWORD_FORM,
                }),
              );
            }}
          >
            Восстановление пароля
          </Button>
        </div>

        {getForm()}
      </div>
    </Modal>
  );
};

export default AuthenticationModal;
