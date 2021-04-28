import { AUTHENTICATION } from '../constants';
import { AuthenticationActionProps, AuthenticationProps } from '../types';

const initialState = { user: {}, isLogged: false };

export const authentication = (
  state: AuthenticationProps = initialState,
  action: AuthenticationActionProps,
) => {
  switch (action.type) {
    case AUTHENTICATION.REGISTRATION:
      return action.payload;
    case AUTHENTICATION.LOGIN:
      return action.payload;
    case AUTHENTICATION.PROFILE:
      return action.payload;
    case AUTHENTICATION.REFRESH:
      return action.payload;
    case AUTHENTICATION.LOGOUT:
      return action.payload;
    default:
      return state;
  }
};
