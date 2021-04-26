import { ActionProps, ScheduleData } from '../../common/types';
import { RECORD } from '../constants';

export const records = (state: ScheduleData = {}, action: ActionProps) => {
  switch (action.type) {
    case RECORD.GET_ALL_RECORDS:
      return action.payload;
    case RECORD.CREATE_RECORD:
      return action.payload;
    default:
      return state;
  }
};
