import { AUTH_TABS } from '../constants';

export interface AuthenticationState {
  authenticationFormModalActiveTab: AUTH_TABS;
}

export interface ActionProps {
  type: string;
  payload: any;
}

export interface SignInProps {
  email: string;
  password: string;
}

export interface User extends SignInProps {
  id?: number;
  firstName: string;
  lastName: string;
}
