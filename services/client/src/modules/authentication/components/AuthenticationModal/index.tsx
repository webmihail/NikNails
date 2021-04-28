import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { clickCounter } from '../../../common/utils/clickCounter';
import styles from './authenticationModal.module.scss';
import classnames from 'classnames';
import { AUTH_TABS } from '../../constants';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';
//TODO: When we added recovery pass
// import RecoveryPasswordForm from '../RecoveryPasswordForm';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../../common/types';
import { setSignInTab, setSignUpTab } from '../../actions';
import goldUserImg from '../../images/goldUser.png';
import { logOut } from '../../../../api/authentication';

const AuthenticationModal = () => {
  const headerLogo = document.querySelector('.header__logo');
  const activeTab = useSelector((state: AppStore) => state.authenticationFormModalActiveTab);
  const userIsLogged = useSelector((state: AppStore) => state.authentication.isLogged);
  const dispatch = useDispatch();
  const [isModalOpen, setOpenModal] = useState(false);

  useEffect(() => {
    headerLogo && clickCounter(headerLogo, setOpenModal);
  }, [headerLogo]);

  const getForm = () => {
    switch (activeTab) {
      case AUTH_TABS.SIGN_IN_FORM:
        return <SignInForm dispatch={dispatch} />;
      case AUTH_TABS.SIGN_UP_FORM:
        return <SignUpForm dispatch={dispatch} />;
      //TODO: When we added recovery pass
      // case TABS.RECOVERY_PASSWORD_FORM:
      //   return <RecoveryPasswordForm />;
      default:
        return null;
    }
  };

  return (
    <Modal
      centered={true}
      visible={isModalOpen}
      onCancel={() => {
        dispatch(setSignInTab());

        setOpenModal(false);
      }}
      className={styles.modal}
      closable={false}
      title={false}
      footer={null}
      destroyOnClose={true}
    >
      {!userIsLogged ? (
        <div className={styles.modalWrapper}>
          <div className={styles.buttonsWrapper}>
            <Button
              className={classnames(styles.button, {
                [styles.buttonChecked]: AUTH_TABS.SIGN_IN_FORM === activeTab,
              })}
              onClick={() => {
                dispatch(setSignInTab());
              }}
            >
              Авторизация
            </Button>
            <Button
              className={classnames(styles.button, {
                [styles.buttonChecked]: AUTH_TABS.SIGN_UP_FORM === activeTab,
              })}
              onClick={() => {
                dispatch(setSignUpTab());
              }}
            >
              Регистрация
            </Button>
            {/* TODO: When we added recovery pass */}
            {/* <Button
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
          </Button> */}
          </div>

          {getForm()}
        </div>
      ) : (
        <div className={styles.loggedModalWrapper}>
          <img src={goldUserImg} alt="gold user img" />
          <Button onClick={() => dispatch(logOut())}>Выйти</Button>
        </div>
      )}
    </Modal>
  );
};

export default AuthenticationModal;
