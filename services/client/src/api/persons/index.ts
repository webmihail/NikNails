import { notification } from 'antd';
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { createPersonsAction, getAllPersonsAction } from '../../modules/persons/actions';
import { Person, PersonsFilter } from '../../modules/persons/types';
import settings from '../../settings';

export const getAllPersons = (filter: PersonsFilter) => {
  return (dispatch: Dispatch<any>) => {
    axios
      .post(`${settings.apiUrlV1}/api/v1/persons/filter`, filter)
      .then((res: AxiosResponse<Person[]>) => dispatch(getAllPersonsAction(res.data)))
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
      .then((res: AxiosResponse<Person>) => dispatch(createPersonsAction(res.data)))
      .catch((error) => {
        notification.error({
          message: `Ошибка ${error.response.data.statusCode}!`,
          description: 'Что-то пошло не так, мы скоро это устраним!',
        });
      });
  };
};
