import { ActionProps, ScheduleData } from '../types';

export const records = (state: ScheduleData = {}, action: ActionProps) => {
  switch (action.type) {
    case 'GET_ALL_RECORDS':
      return action.payload;
    default:
      return state;
  }
};
