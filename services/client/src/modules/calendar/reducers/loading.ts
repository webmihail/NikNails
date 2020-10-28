import { ActionProps } from '../types';

export const loading = (state: boolean = false, action: ActionProps) => {
  switch (action.type) {
    case 'SHOW_LOADER':
      return true;
    case 'HIDE_LOADER':
      return false;
    default:
      return state;
  }
};
