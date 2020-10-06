import { Moment } from "moment"
import { Dispatch } from "redux"


export const setCalendarBeginDate = (value: Moment) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: 'SET_CALENDAR_BEGIN_DATE',
      payload: value
    })
  }
}