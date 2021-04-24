import { AUTH_TABS } from '../../authentication/constants';
import { User } from '../../authentication/types';
import { RECORD_TABS } from '../../calendar/constants';
import { CalendarProps, Record, GetPersonsByFilter, ScheduleData } from '../../calendar/types';

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
    data: Record;
    isOpen: boolean;
  };
  recordFormModalActiveTab: RECORD_TABS;
  authenticationFormModalActiveTab: AUTH_TABS;
  authentication: User;
}

export interface ActionProps {
  type: string;
  payload: any;
}
