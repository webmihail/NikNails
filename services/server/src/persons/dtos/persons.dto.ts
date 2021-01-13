export interface PersonDTO {
  id?: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  created_at?: string;
  update_at?: string;
}

export interface PersonsFilter {
  take?: number;
  skip?: number;
  search?: string | null;
}
