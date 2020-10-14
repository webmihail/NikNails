import { Dispatch } from 'redux';
import { Person } from '../types';

interface GetAllPersonsOwnProps {
  type: string;
  payload: Person[];
}

export const getAllPersonsAction = (values: GetAllPersonsOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: values.type,
      payload: values.payload,
    });
  };
};
