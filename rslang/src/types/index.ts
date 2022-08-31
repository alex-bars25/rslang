export type InputType = 'password' | 'text' | 'email';

export interface User {
  name?: string;
  email: string;
  password: string;
}

export interface LoggedUser {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}
