import { notification } from 'antd';
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { getAllPersonsAction, createPersonsAction } from '../../modules/calendar/actions';
import { Person, PersonsFilter } from '../../modules/calendar/types';
import settings from '../../settings';

export const getAllPersons = (filter: PersonsFilter) => {
  return (dispatch: Dispatch<any>) => {
    axios
      .post(`${settings.apiUrlV1}/api/v1/persons/filter`, filter)
      .then((res: AxiosResponse<Person[]>) =>
        dispatch(getAllPersonsAction({ type: 'GET_ALL_PERSONS', payload: res.data })),
      )
      .catch((error) => {
        notification.error({
          message: `Ошибка ${error.response.data.statusCode}!`,
          description: 'Что-то пошло не так, мы скоро это устраним!',
        });
      });
  };
};

export const createPerson = (data: Person) => {
  return (dispatch: Dispatch<any>) => {
    axios
      .post(`${settings.apiUrlV1}/api/v1/persons`, data)
      .then((res: AxiosResponse<Person>) =>
        dispatch(createPersonsAction({ type: 'CREATE_PERSON', payload: res.data })),
      )
      .catch((error) => {
        notification.error({
          message: `Ошибка ${error.response.data.statusCode}!`,
          description: 'Что-то пошло не так, мы скоро это устраним!',
        });
      });
  };
};
