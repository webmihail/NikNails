import { ActionProps } from '../../common/types';
import { RECORD_TABS } from '../constants';

export const recordFormModalActiveTab = (
  state: RECORD_TABS = RECORD_TABS.CREATE_PERSON_FORM,
  action: ActionProps,
) => {
  switch (action.type) {
    case RECORD_TABS.CREATE_RECORD_FORM:
      return action.payload;
    case RECORD_TABS.CREATE_PERSON_FORM:
      return action.payload;
    default:
      return state;
  }
};
