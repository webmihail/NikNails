import { Dispatch } from 'redux';
import { AUTHENTICATION } from '../constants';
import { Login, User } from '../types';

export const registrationAction = (values: User) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AUTHENTICATION.REGISTRATION,
      payload: values,
    });
  };
};

export const loginAction = (values: Login) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AUTHENTICATION.LOGIN,
      payload: values,
    });
  };
};

export const profileAction = (values: User) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AUTHENTICATION.PROFILE,
      payload: values,
    });
  };
};
