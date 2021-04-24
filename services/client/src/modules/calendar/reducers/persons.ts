import { ActionProps } from '../../common/types';
import { GetPersonsByFilter } from '../types';

export const persons = (state: GetPersonsByFilter | null = null, action: ActionProps) => {
  switch (action.type) {
    case 'GET_ALL_PERSONS':
      return action.payload;
    case 'CREATE_PERSON':
      return action.payload;
    default:
      return state;
  }
};
