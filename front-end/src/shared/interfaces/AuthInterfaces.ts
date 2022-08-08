export interface IBodyAuth {
  email?: string;
  password?: string;
  name?: string;
  confirm_password?: string;
}

interface Token {
  type: string;
  token: string;
  expires_at: Date;
}

export interface User {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  token: string;
  token_created_at: Date;
  created_at: Date;
  updated_at: Date;
  picture?: null;
}

export interface LoginData {
  user: User;
  token: Token;
}

export interface ILoginResponse {
  data: LoginData;
}

export interface IResetResponse {
  data: User;
}

export interface IChangePasswordResponse {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}
