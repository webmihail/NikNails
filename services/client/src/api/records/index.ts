import { notification } from 'antd';
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { getAllRecordsAction } from '../../modules/calendar/actions';
import { Record } from '../../modules/calendar/types';
import settings from '../../settings';

export const getAllRecords = () => {
  return (dispatch: Dispatch<any>) => {
    axios
      .get(`${settings.apiUrlV1}/api/v1/records`)
      .then((res: AxiosResponse<Record[]>) =>
        dispatch(getAllRecordsAction({ type: 'GET_ALL_RECORDS', payload: res.data })),
      )
      .catch((error) => {
        notification.error({
          message: `Ошибка ${error.response.data.statusCode}!`,
          description: 'Что-то пошло не так, мы скоро это устраним!',
        });
      });
  };
};

export const createRecords = (data: Record) => {
  return (dispatch: Dispatch<any>) => {
    axios
      .post(`${settings.apiUrlV1}/api/v1/records`, data)
      .then(() => {
        dispatch(getAllRecords());
      })
      .catch((error) => {
        notification.error({
          message: `Ошибка ${error.response.data.statusCode}!`,
          description: 'Что-то пошло не так, мы скоро это устраним!',
        });
      });
  };
};
