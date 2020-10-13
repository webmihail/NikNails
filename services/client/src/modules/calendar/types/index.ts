import { Moment } from "moment";
import { CALENDAR_TIME_STATUSES } from "../constants/CalendarTimeStatuses";
import { RECORD_TYPES } from "../constants/RecordTypes";
import { TABS } from "../constants/Tabs";

export interface Person {
  id?: number;
  phoneNumber: string;
  firstName: string;
  lastName: string;
}

export interface GetPersonsByFilter {
  data: Person[] | null,
  count: number;
}

export interface PersonsFilter {
  take?: number;
  skip?: number;
  search?: string | null;
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

export interface Record {
  id?: number;
  personId?: number | null;
  time: string;
  person: Person;
  status: CALENDAR_TIME_STATUSES;
  type: RECORD_TYPES;
}

export interface ActionProps {
  type: string;
  payload: any;
}

export interface ScheduleSettings {
  currentDate: Moment;
  dateRange: number;
  startTime: Moment;
  endTime: Moment;
  timeRange: number;
}

export interface CalendarProps {
  scheduleSettings: ScheduleSettings;
}

export interface RootState {
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
  activeTab: TABS
}