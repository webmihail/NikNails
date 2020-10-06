export interface PersonDTO {
  id?: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface PersonsFilter {
  take?: number;
  skip?: number;
  search?: string | null;
}