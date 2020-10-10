import axios from 'axios';
import { getAllRecordsAction } from '../../modules/calendar/actions';
import { Record } from '../../modules/calendar/types';
import settings from '../../settings';

export const getAllRecords = () => {
  return (dispatch: any) => {
    axios.get(`${settings.apiUrlV1}/api/v1/records`).then(res => dispatch(getAllRecordsAction({ type: 'GET_ALL_RECORDS', payload: res.data })));
  }
}

export const createRecords = (data: Record) => {
  return (dispatch: any) => {
    axios.post(`${settings.apiUrlV1}/api/v1/records`, data).then(res => dispatch(getAllRecords()));
  }
}