import { Dispatch } from 'redux';
import { AUTH_TABS } from '../constants';

export const setSignInTab = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AUTH_TABS.SIGN_IN_FORM,
      payload: AUTH_TABS.SIGN_IN_FORM,
    });
  };
};

export const setSignUpTab = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AUTH_TABS.SIGN_UP_FORM,
      payload: AUTH_TABS.SIGN_UP_FORM,
    });
  };
};

export const setRecoveryTab = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AUTH_TABS.RECOVERY_PASSWORD_FORM,
      payload: AUTH_TABS.RECOVERY_PASSWORD_FORM,
    });
  };
};
