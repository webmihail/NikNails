import { Dispatch } from 'redux';
import { LOADER } from '../constants';

export const showLoader = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: LOADER.SHOW_LOADER,
      payload: true,
    });
  };
};

export const hideLoader = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: LOADER.HIDE_LOADER,
      payload: false,
    });
  };
};
