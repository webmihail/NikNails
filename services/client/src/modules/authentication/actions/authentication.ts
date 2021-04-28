import { Dispatch } from 'redux';
import { AUTHENTICATION } from '../constants';
import { AuthenticationProps } from '../types';

export const registrationAction = (values: AuthenticationProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AUTHENTICATION.REGISTRATION,
      payload: values,
    });
  };
};

export const loginAction = (values: AuthenticationProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AUTHENTICATION.LOGIN,
      payload: values,
    });
  };
};

export const logOutAction = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AUTHENTICATION.LOGOUT,
      payload: {
        user: {},
        isLogged: false,
      },
    });
  };
};

export const profileAction = (values: AuthenticationProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AUTHENTICATION.PROFILE,
      payload: values,
    });
  };
};

export const refreshAction = (values: AuthenticationProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AUTHENTICATION.REFRESH,
      payload: values,
    });
  };
};
