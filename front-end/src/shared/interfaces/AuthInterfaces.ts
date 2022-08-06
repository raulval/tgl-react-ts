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

interface User {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  token: string;
  token_created_at: Date;
  created_at: Date;
  updated_at: Date;
  picture: null;
}

interface LoginData {
  user: User;
  token: Token;
}

export interface ILoginResponse {
  data: LoginData;
}

interface ResetData {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  token: string;
  token_created_at: Date;
  created_at: Date;
  updated_at: Date;
}

export interface IResetResponse {
  data: ResetData;
}

export interface IChangePasswordResponse {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}
