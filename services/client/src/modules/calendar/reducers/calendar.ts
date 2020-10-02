import moment from "moment";
import { ActionProps, CalendarProps } from "../types";

const initialState: CalendarProps = {
  scheduleSettings: {
    currentDate: moment(),
    dateRange: 10,
    startTime: moment().clone().set('hour', 9).set('minute', 0o0),
    endTime: moment().clone().set('hour', 17).set('minute', 0o0),
    timeRange: 3
  }
}

export const calendar = (state: CalendarProps = initialState, action: ActionProps) => {
  switch(action.type) {
    case 'SET_CALENDAR_BEGIN_DATE': 
      return {
        scheduleSettings: {...state.scheduleSettings, currentDate: action.payload}
      }
    default:
      return state;
  }
}