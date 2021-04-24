export interface SignInProps {
  email: string;
  password: string;
}

export interface User extends SignInProps {
  id?: number;
  firstName: string;
  lastName: string;
}

export interface Login {
  user: User;
  accessToken: string;
  expirationDate: number;
}
