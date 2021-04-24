import { Dispatch } from 'redux';
import { Login, User } from '../types';

interface GetUserOwnProps {
  type: string;
  payload: User;
}

interface LoginOwnProps {
  type: string;
  payload: Login;
}

export const registrationAction = (values: GetUserOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: values.type,
      payload: values.payload,
    });
  };
};

export const loginAction = (values: LoginOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: values.type,
      payload: values.payload,
    });
  };
};

export const profileAction = (values: GetUserOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: values.type,
      payload: values.payload,
    });
  };
};
