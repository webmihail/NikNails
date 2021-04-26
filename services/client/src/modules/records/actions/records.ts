import { Dispatch } from 'redux';
import { RECORD } from '../constants';
import { Record } from '../types';

export const getAllRecordsAction = (values: Record[]) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: RECORD.GET_ALL_RECORDS,
      payload: values,
    });
  };
};

export const createRecordAction = (values: Record) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: RECORD.CREATE_RECORD,
      payload: values,
    });
  };
};
