import { Moment } from "moment";
import { TABS } from "../constants/Tabs";

export enum CALENDAR_TIME_STATUSES {
  BLOCKED = 'Заблокировано',
  BUSY = 'Занято',
  FREE = 'Свободно'
}

export enum RECORD_TYPE {
  MANICURE = 'Маникюр',
  PEDICURE = 'Педикюр'
}

export interface Person {
  id?: number;
  phoneNumber: string;
  firstName: string;
  lastName: string;
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
  personId: number | null;
  time: string;
  status?: CALENDAR_TIME_STATUSES;
  type: RECORD_TYPE;
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
  calendar: CalendarProps;
  recordFormModal: {
    data: string;
    isOpen: boolean;
  };
  recordInfoModal: {
    data: string;
    isOpen: boolean;
  };
  activeTab: TABS
}