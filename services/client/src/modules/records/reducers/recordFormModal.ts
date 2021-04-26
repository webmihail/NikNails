import { ActionProps } from '../../common/types';
import { RECORD_MODAL } from '../constants';

interface RecordModalOwnProps {
  isOpen: boolean;
  data: string;
}

const initialState = {
  isOpen: false,
  data: '',
};

export const recordFormModal = (state: RecordModalOwnProps = initialState, action: ActionProps) => {
  switch (action.type) {
    case RECORD_MODAL.RECORD_FORM_MODAL:
      return action.payload;
    default:
      return state;
  }
};
