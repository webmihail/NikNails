import axios from 'axios';
import { getAll } from '../../modules/calendar/actions';
import { Person } from '../../modules/calendar/types';
import settings from '../../settings';

export const getAllPersons = () => {
  return (dispatch: any) => {
    axios.get(`${settings.apiUrlV1}/api/v1/persons`).then(res => dispatch(getAll({ type: 'GET_ALL_PERSONS', payload: res.data })))
  }
}

export const createPerson = (data: Person) => {
  return (dispatch: any) => {
    axios.post(`${settings.apiUrlV1}/api/v1/persons`, data).then(res => console.log(res))
  }
}