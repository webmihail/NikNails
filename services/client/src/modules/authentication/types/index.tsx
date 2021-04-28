export interface SignInProps {
  email: string;
  password: string;
}

export interface User extends SignInProps {
  id?: number;
  firstName: string;
  lastName: string;
}

export interface AccessToken {
  token: string;
  expirationDate: number;
}

export interface Login {
  user: User;
  accessToken: AccessToken;
}
