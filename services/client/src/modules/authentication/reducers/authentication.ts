import { ActionProps } from '../../common/types';
import { User } from '../types';

export const authentication = (state: User | {} = {}, action: ActionProps) => {
  switch (action.type) {
    case 'REGISTRATION':
      return action.payload;
    case 'LOGIN':
      return { ...action.payload.user };
    case 'PROFILE':
      return action.payload;
    default:
      return state;
  }
};
