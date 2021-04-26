import { ActionProps } from '../../common/types';
import { AUTHENTICATION } from '../constants';
import { User } from '../types';

export const authentication = (state: User | {} = {}, action: ActionProps) => {
  switch (action.type) {
    case AUTHENTICATION.REGISTRATION:
      return action.payload;
    case AUTHENTICATION.LOGIN:
      return { ...action.payload.user };
    case AUTHENTICATION.PROFILE:
      return action.payload;
    default:
      return state;
  }
};
