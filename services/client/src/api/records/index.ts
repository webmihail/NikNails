import axios from 'axios';
import { Record } from '../../modules/calendar/types';
import settings from '../../settings';

export const createRecords = (data: Record) => {
  return (dispatch: any) => {
    axios.post(`${settings.apiUrlV1}/api/v1/records`, data).then(res => console.log(res))
  }
}