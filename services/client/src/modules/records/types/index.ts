import { CALENDAR_TIME_STATUSES } from '../../calendar/constants';
import { Person } from '../../persons/types';
import { RECORD_TYPES } from '../constants';

export interface Record {
  id?: number;
  personId?: number | null;
  time: string;
  person: Person;
  status: CALENDAR_TIME_STATUSES;
  type: RECORD_TYPES;
}
