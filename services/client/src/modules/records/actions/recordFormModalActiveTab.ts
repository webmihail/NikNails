import { Dispatch } from 'redux';
import { RECORD_TABS } from '../constants';

export const setRecordsTab = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: RECORD_TABS.CREATE_RECORD_FORM,
      payload: RECORD_TABS.CREATE_RECORD_FORM,
    });
  };
};

export const setPersonsTab = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: RECORD_TABS.CREATE_PERSON_FORM,
      payload: RECORD_TABS.CREATE_PERSON_FORM,
    });
  };
};
