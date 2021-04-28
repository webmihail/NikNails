import { notification } from 'antd';
import axios from 'axios';
import { Dispatch } from 'redux';
import {
  loginAction,
  registrationAction,
  profileAction,
  setSignInTab,
} from '../../modules/authentication/actions';
import { Login, SignInProps, User } from '../../modules/authentication/types';
import { localStorageUtil } from '../../modules/common/utils';
import { authAxios } from '../../modules/common/utils';
import settings from '../../settings';

export const registration = (values: User) => {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      const { data }: { data: User } = await axios.post(
        `${settings.apiUrlV1}/api/v1/users`,
        values,
      );
      dispatch(registrationAction(data));
      dispatch(setSignInTab());
    } catch (error) {
      if (error.response.data.statusCode === 404) {
        notification.error({
          message: `Ошибка регистрации!`,
          description: 'Пользователь с таким email уже существует!',
        });
      } else {
        notification.error({
          message: `Ошибка ${error.response.data.statusCode}!`,
          description: 'Что-то пошло не так, мы скоро это устраним!',
        });
      }
    }
  };
};

export const login = (values: SignInProps) => {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      const { data }: { data: Login } = await axios.post(
        `${settings.apiUrlV1}/api/v1/auth/login`,
        values,
      );

      localStorageUtil.setStorage('authData', {
        token: data.accessToken.token,
        expirationDate: data.accessToken.expirationDate,
      });

      dispatch(loginAction(data));
    } catch (error) {
      if (error.response.data.statusCode === 401) {
        notification.error({
          message: 'Ошибка авторизации!',
          description: 'Неверный логин или пароль!',
        });
      } else {
        notification.error({
          message: `Ошибка ${error.response.data.statusCode}!`,
          description: 'Что-то пошло не так, мы скоро это устраним!',
        });
      }
    }
  };
};

export const profile = (values: SignInProps) => {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      const { data }: { data: User } = await authAxios({
        method: 'GET',
        url: `${settings.apiUrlV1}/api/v1/auth/profile?email=${values.email},password=${values.password}`,
      });
      dispatch(profileAction(data));
    } catch (error) {
      if (error.response.data.statusCode === 401) {
        notification.error({
          message: 'Ошибка проверки входа!',
          description: 'Похоже что вам нужно залогинитьс!',
        });
      } else {
        notification.error({
          message: `Ошибка ${error.response.data.statusCode}!`,
          description: 'Что-то пошло не так, мы скоро это устраним!',
        });
      }
    }
  };
};
