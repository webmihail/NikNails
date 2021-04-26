import { Dispatch } from 'redux';
import { RECORD_MODAL } from '../constants';
import { Record } from '../types';

interface RecordModalOwnProps {
  isOpen: boolean;
  data: Record | string;
}

export const changeToFormModal = (values: RecordModalOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: RECORD_MODAL.RECORD_FORM_MODAL,
      payload: values,
    });
  };
};

export const changeToInfoModal = (values: RecordModalOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: RECORD_MODAL.RECORD_INFO_MODAL,
      payload: values,
    });
  };
};
