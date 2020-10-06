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
    case 'CHANGE_FORM_MODAL':
      return action.payload;
    default:
      return state;
  }
}