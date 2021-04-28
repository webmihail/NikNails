import { notification } from 'antd';
import axios from 'axios';
import { Dispatch } from 'redux';
import { createPersonsAction, getAllPersonsAction } from '../../modules/persons/actions';
import { Person, PersonsFilter } from '../../modules/persons/types';
import { setRecordsTab } from '../../modules/records/actions';
import settings from '../../settings';

export const getAllPersons = (filter: PersonsFilter) => {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      const { data }: { data: Person[] } = await axios.post(
        `${settings.apiUrlV1}/api/v1/persons/filter`,
        filter,
      );
      dispatch(getAllPersonsAction(data));
    } catch (error) {
      notification.error({
        message: `Ошибка ${error.response.data.statusCode}!`,
        description: 'Что-то пошло не так, мы скоро это устраним!',
      });
    }
  };
};

export const createPerson = (values: Person) => {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      const { data }: { data: Person } = await axios.post(
        `${settings.apiUrlV1}/api/v1/persons`,
        values,
      );
      dispatch(createPersonsAction(data));
      dispatch(setRecordsTab());
    } catch (error) {
      notification.error({
        message: `Ошибка ${error.response.data.statusCode}!`,
        description: 'Что-то пошло не так, мы скоро это устраним!',
      });
    }
  };
};
