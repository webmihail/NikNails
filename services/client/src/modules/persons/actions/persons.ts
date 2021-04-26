import { Dispatch } from 'redux';
import { PERSONS } from '../constants';
import { Person } from '../types';

export const getAllPersonsAction = (values: Person[]) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: PERSONS.GET_ALL_PERSONS,
      payload: values,
    });
  };
};

export const createPersonsAction = (values: Person) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: PERSONS.CREATE_PERSON,
      payload: values,
    });
  };
};
