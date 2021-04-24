import axios, { AxiosRequestConfig } from 'axios';

export const authAxios = (options: AxiosRequestConfig) => {
  return axios({
    method: options.method,
    url: options.url,
    data: options.data,
    headers: {
      Authorization: window.localStorage.getItem('accessToken'),
    },
  });
};
