import { ActionProps } from '../../common/types';
import { RECORD_MODAL } from '../constants';
import { Record } from '../types';

interface RecordModalOwnProps {
  isOpen: boolean;
  data: Record | null;
}

const initialState = {
  isOpen: false,
  data: null,
};

export const recordInfoModal = (state: RecordModalOwnProps = initialState, action: ActionProps) => {
  switch (action.type) {
    case RECORD_MODAL.RECORD_INFO_MODAL:
      return action.payload;
    default:
      return state;
  }
};
