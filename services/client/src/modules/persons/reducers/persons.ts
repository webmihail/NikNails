import { ActionProps } from '../../common/types';
import { PERSONS } from '../constants';
import { GetPersonsByFilter } from '../types';

export const persons = (state: GetPersonsByFilter | null = null, action: ActionProps) => {
  switch (action.type) {
    case PERSONS.GET_ALL_PERSONS:
      return action.payload;
    case PERSONS.CREATE_PERSON:
      return action.payload;
    default:
      return state;
  }
};
