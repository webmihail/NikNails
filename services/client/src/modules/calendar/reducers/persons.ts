import { ActionProps, Person } from "../types";

export const persons = (state: Person[] | null = null, action: ActionProps) => {
  switch(action.type) {
    case 'GET_ALL_PERSONS':
      return action.payload;
    default:
      return state;
  }
}