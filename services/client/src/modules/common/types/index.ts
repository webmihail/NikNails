import { Moment } from 'moment';
import { AUTH_TABS } from '../../authentication/constants';
import { User } from '../../authentication/types';
import { CalendarProps } from '../../calendar/types';
import { GetPersonsByFilter } from '../../persons/types';
import { RECORD_TABS } from '../../records/constants';
import { Record } from '../../records/types';

export interface AppStore {
  records: ScheduleData;
  persons: GetPersonsByFilter;
  calendar: CalendarProps;
  loading: boolean;
  recordFormModal: {
    data: string;
    isOpen: boolean;
  };
  recordInfoModal: {
    data: Record | null;
    isOpen: boolean;
  };
  recordFormModalActiveTab: RECORD_TABS;
  authenticationFormModalActiveTab: AUTH_TABS;
  authentication: {
    user: User;
    isLogged: boolean;
  };
}

export interface ScheduleData {
  [date: string]: Record[];
}

export interface ScheduleSettings {
  currentDate: Moment;
  dateRange: number;
  startTime: Moment;
  endTime: Moment;
  timeRange: number;
}

export interface ScheduleSettings {
  currentDate: Moment;
  dateRange: number;
  startTime: Moment;
  endTime: Moment;
  timeRange: number;
}

export interface ActionProps {
  type: string;
  payload: any;
}
