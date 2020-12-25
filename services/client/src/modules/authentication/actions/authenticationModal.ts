import { Dispatch } from 'redux';
import { TABS } from '../constants';

interface SetActiveTabOwnProps {
  type: string;
  payload: TABS;
}

export const setActiveTab = (values: SetActiveTabOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: values.type,
      payload: values.payload,
    });
  };
};
