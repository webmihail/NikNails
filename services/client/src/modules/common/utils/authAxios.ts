import axios, { AxiosRequestConfig } from 'axios';
import { localStorageUtil } from '.';

export const authAxios = (options: AxiosRequestConfig) => {
  return axios({
    method: options.method,
    url: options.url,
    data: options.data,
    headers: {
      Authorization: localStorageUtil.getStorage('authData')
        ? `Bearer ${localStorageUtil.getStorage('authData').token}`
        : '',
    },
  });
};
