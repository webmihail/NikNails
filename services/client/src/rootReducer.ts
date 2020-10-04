import { records, loading, recordFormModal, recordInfoModal, calendar, activeTab } from './modules/calendar/reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers(
  {
    records,
    loading,
    calendar,
    recordFormModal,
    recordInfoModal,
    activeTab
  }
)