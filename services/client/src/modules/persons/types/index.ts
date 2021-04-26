export interface Person {
  id?: number;
  phoneNumber: string;
  firstName: string;
  lastName: string;
}

export interface GetPersonsByFilter {
  data: Person[] | null;
  count: number;
}

export interface PersonsFilter {
  take?: number;
  skip?: number;
  search?: string | null;
}
