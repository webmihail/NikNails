import { ActionProps, Record } from '../types'

interface ModalOwnProps {
  isOpen: boolean,
  data: Record | null
}

const initialState = {
  isOpen: false,
  data: null
}

export const recordInfoModal = (state: ModalOwnProps = initialState, action: ActionProps) => {
  switch(action.type) {
    case 'OPEN_INFO_MODAL':
      return action.payload;
    case 'CLOSE_INFO_MODAL':
      return action.payload;
    default:
      return state;
  }
}