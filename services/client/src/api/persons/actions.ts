import axios from 'axios';
import { Dispatch } from 'redux';
import { Person } from '../../modules/calendar/types';
import settings from '../../settings';

export const getAllPersons = () => {
  return (dispatch: Dispatch) => {
    axios.get(`${settings.apiUrlV1}/api/v1/persons`).then(res => console.log(res))
  }
}

export const createPerson = (data: Person) => {
  return (dispatch: Dispatch) => {
    axios.post(`${settings.apiUrlV1}/api/v1/persons`, data).then(res => console.log(res))
  }
}