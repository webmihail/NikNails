import { Moment } from "moment"
import { Dispatch } from "redux"

interface actionOwnProps {
  type: string;
  payload: any;
}

export const changeModal = (value: actionOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: value.type,
      payload: value.payload
    })
  }
}

export const setActiveTab = (value: actionOwnProps) => {
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