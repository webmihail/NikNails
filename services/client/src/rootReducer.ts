import { loading, calendar } from './modules/calendar/reducers';

import { persons } from './modules/persons/reducers';

import {
  records,
  recordFormModal,
  recordInfoModal,
  recordFormModalActiveTab,
} from './modules/records/reducers';

import {
  authenticationFormModalActiveTab,
  authentication,
} from './modules/authentication/reducers';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  records,
  recordFormModal,
  recordInfoModal,
  recordFormModalActiveTab,
  loading,
  calendar,
  authenticationFormModalActiveTab,
  authentication,
  persons,
});
