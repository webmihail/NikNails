import { TABS } from '../constants';

export interface AuthenticationState {
  authenticationFormModalActiveTab: TABS;
}

export interface ActionProps {
  type: string;
  payload: any;
}
