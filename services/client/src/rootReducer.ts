import {
  records,
  loading,
  recordFormModal,
  recordInfoModal,
  calendar,
  recordFormModalActiveTab,
  persons,
} from './modules/calendar/reducers';

import { authenticationFormModalActiveTab } from './modules/authentication/reducers';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  records,
  loading,
  calendar,
  recordFormModal,
  recordInfoModal,
  recordFormModalActiveTab,
  persons,
  authenticationFormModalActiveTab,
});
