import { ActionProps } from '../../common/types';
import { Record } from '../types';

interface ModalOwnProps {
  isOpen: boolean;
  data: Record | null;
}

const initialState = {
  isOpen: false,
  data: null,
};

export const recordInfoModal = (state: ModalOwnProps = initialState, action: ActionProps) => {
  switch (action.type) {
    case 'CHANGE_INFO_MODAL':
      return action.payload;
    default:
      return state;
  }
};
