import { notification } from 'antd';
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import {
  loginAction,
  registrationAction,
  profileAction,
} from '../../modules/authentication/actions';
import { Login, SignInProps, User } from '../../modules/authentication/types';
import { localStorageUtil } from '../../modules/common/utils';
import { authAxios } from '../../modules/common/utils';
import settings from '../../settings';

export const registration = (data: User) => {
  return (dispatch: Dispatch<any>) => {
    axios
      .post(`${settings.apiUrlV1}/api/v1/users`, data)
      .then((res: AxiosResponse<User>) => dispatch(registrationAction(res.data)))
      .catch((error) => {
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
      });
  };
};

export const login = (data: SignInProps) => {
  return (dispatch: Dispatch<any>) => {
    axios
      .post(`${settings.apiUrlV1}/api/v1/auth/login`, data)
      .then((res: AxiosResponse<Login>) => {
        localStorageUtil.setStorage('authData', {
          token: res.data.accessToken,
          expirationDate: res.data.expirationDate,
        });

        dispatch(loginAction(res.data));
      })
      .catch((error) => {
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
      });
  };
};

export const profile = (data: SignInProps) => {
  return (dispatch: Dispatch<any>) => {
    authAxios({
      method: 'GET',
      url: `${settings.apiUrlV1}/api/v1/auth/profile?email=${data.email},password=${data.password}`,
    })
      .then((res: AxiosResponse<User>) => dispatch(profileAction(res.data)))
      .catch((error) => {
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
      });
  };
};
