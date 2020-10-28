import { TABS } from '../constants/Tabs';
import { ActionProps } from '../types';

export const activeTab = (state: TABS = TABS.CREATE_PERSON_FORM, action: ActionProps) => {
  switch (action.type) {
    case 'CREATE_RECORD_FORM':
      return action.payload;
    case 'CREATE_PERSON_FORM':
      return action.payload;
    default:
      return state;
  }
};
