import { Moment } from 'moment';
import { Dispatch } from 'redux';
import { CALENDAR } from '../constants';

export const setCalendarBeginDate = (values: Moment) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: CALENDAR.SET_CALENDAR_BEGIN_DATE,
      payload: values,
    });
  };
};
