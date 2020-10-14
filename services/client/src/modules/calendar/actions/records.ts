import { Dispatch } from 'redux';
import { Record } from '../types';

interface GetAllRecordsOwnProps {
  type: string;
  payload: Record[];
}

export const getAllRecordsAction = (values: GetAllRecordsOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: values.type,
      payload: values.payload,
    });
  };
};
