import { Dispatch } from 'redux';
import { AUTH_TABS } from '../constants';

interface SetActiveTabOwnProps {
  type: string;
  payload: AUTH_TABS;
}

export const setActiveTab = (values: SetActiveTabOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: values.type,
      payload: values.payload,
    });
  };
};
