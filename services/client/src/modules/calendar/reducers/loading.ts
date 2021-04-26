import { LOADER } from '../constants';

interface LoadingOwnProps {
  type: string;
  payload: boolean;
}

export const loading = (state: boolean = false, action: LoadingOwnProps) => {
  switch (action.type) {
    case LOADER.SHOW_LOADER:
      return action.payload;
    case LOADER.HIDE_LOADER:
      return action.payload;
    default:
      return state;
  }
};
