import { Dispatch } from "redux"

import { TABS } from "../constants/Tabs"

interface ChangeModalOwnProps {
  type: string;
  payload: {
    isOpen: boolean;
    data: any;
  };
}

interface SetActiveTabOwnProps {
  type: string;
  payload: TABS;
}

export const changeModal = (values: ChangeModalOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: values.type,
      payload: values.payload
    })
  }
}

export const setActiveTab = (values: SetActiveTabOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: values.type,
      payload: values.payload
    })
  }
}