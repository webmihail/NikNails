import { Dispatch } from 'redux';

export const setLoading = (action: 'SHOW_LOADER' | 'HIDE_LOADER') => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: action,
      payload: null,
    });
  };
};
