import { ActionProps } from '../../common/types';
import { AUTH_TABS } from '../constants';

export const authenticationFormModalActiveTab = (
  state: AUTH_TABS = AUTH_TABS.SIGN_IN_FORM,
  action: ActionProps,
) => {
  switch (action.type) {
    case 'SIGN_IN_FORM':
      return action.payload;
    case 'SIGN_UP_FORM':
      return action.payload;
    case 'RECOVERY_PASSWORD_FORM':
      return action.payload;
    default:
      return state;
  }
};
