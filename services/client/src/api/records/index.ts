import axios from 'axios';
import { Record } from '../../modules/calendar/types';
import settings from '../../settings';

export const getAllRecords = () => {
  return (dispatch: any) => {
    axios.get(`${settings.apiUrlV1}/api/v1/records`).then(res => console.log(res))
  }
}

export const createRecords = (data: Record) => {
  return (dispatch: any) => {
    axios.post(`${settings.apiUrlV1}/api/v1/records`, data).then(res => console.log(res))
  }
}