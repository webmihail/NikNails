import { ActionProps } from "../types";

interface ModalOwnProps {
  isOpen: boolean,
  data: string
}

const initialState = {
  isOpen: false,
  data: ''
}

export const recordFormModal = (state: ModalOwnProps = initialState, action: ActionProps) => {
  switch(action.type) {
    case 'OPEN_FORM_MODAL':
      return action.payload;
    case 'CLOSE_FORM_MODAL':
      return action.payload;
    default:
      return state;
  }
}