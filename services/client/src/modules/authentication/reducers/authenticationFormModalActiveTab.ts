import { TABS } from '../constants';
import { ActionProps } from '../types';

export const authenticationFormModalActiveTab = (
  state: TABS = TABS.SIGN_IN_FORM,
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
