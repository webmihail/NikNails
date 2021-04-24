import { ScheduleData } from '../types';
import { ActionProps } from '../../common/types';

export const records = (state: ScheduleData = {}, action: ActionProps) => {
  switch (action.type) {
    case 'GET_ALL_RECORDS':
      return action.payload;
    case 'CREATE_RECORD':
      return action.payload;
    default:
      return state;
  }
};
