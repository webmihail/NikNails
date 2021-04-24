import { RECORD_TABS } from '../constants';
import { ActionProps } from '../types';

export const recordFormModalActiveTab = (
  state: RECORD_TABS = RECORD_TABS.CREATE_PERSON_FORM,
  action: ActionProps,
) => {
  switch (action.type) {
    case 'CREATE_RECORD_FORM':
      return action.payload;
    case 'CREATE_PERSON_FORM':
      return action.payload;
    default:
      return state;
  }
};
