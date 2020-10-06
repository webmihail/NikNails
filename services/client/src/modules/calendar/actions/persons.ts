import { Dispatch } from "redux";
import { Person, PersonsFilter } from "../types";

interface GetAllPersonsOwnProps {
  type: string;
  payload: Person[];
}

export const getAll = (values: GetAllPersonsOwnProps) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: values.type,
      payload: values.payload
    })
  }
}