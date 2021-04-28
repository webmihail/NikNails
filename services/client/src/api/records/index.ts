import { notification } from 'antd';
import axios from 'axios';
import { Dispatch } from 'redux';
import { changeToFormModal, getAllRecordsAction } from '../../modules/records/actions';
import { Record } from '../../modules/records/types';
import settings from '../../settings';

export const getAllRecords = () => {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      const { data } = await axios.get(`${settings.apiUrlV1}/api/v1/records`);
      dispatch(getAllRecordsAction(data));
    } catch (error) {
      notification.error({
        message: `Ошибка ${error.response.data.statusCode}!`,
        description: 'Что-то пошло не так, мы скоро это устраним!',
      });
    }
  };
};

export const createRecords = (values: Record) => {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      await axios.post(`${settings.apiUrlV1}/api/v1/records`, values);
      dispatch(getAllRecords());
      dispatch(
        changeToFormModal({
          isOpen: false,
          data: '',
        }),
      );
    } catch (error) {
      notification.error({
        message: `Ошибка ${error.response.data.statusCode}!`,
        description: 'Что-то пошло не так, мы скоро это устраним!',
      });
    }
  };
};
