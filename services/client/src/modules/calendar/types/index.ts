import { Moment } from "moment";

export enum CALENDAR_TIME_STATUSES {
  BLOCKED = 'BLOCKED',
  BUSY = 'BUSY',
  FREE = 'FREE'
}

export enum RECORD_TYPE {
  SIMPLE_MANICURE = '',
  MANICURE_WITH_PICTURE = '',
  PEDICURE = ''
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
  time: string;
  status: CALENDAR_TIME_STATUSES;
  type: RECORD_TYPE;
}