import { Moment } from "moment"
import { Dispatch } from "redux"

interface actionChangeModalsOwnProps {
  type: string;
  payload: any;
}

export const changeModal = (value: actionChangeModalsOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: value.type,
      payload: value.payload
    })
  }
}

export const setCalendarBeginDate = (value: Moment) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: 'SET_CALENDAR_BEGIN_DATE',
      payload: value
    })
  }
}