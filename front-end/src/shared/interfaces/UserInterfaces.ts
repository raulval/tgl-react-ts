export interface Token {
  type: string;
  token: string;
  expires_at: Date;
}

export interface User {
  email: string;
  name: string;
  credits: number;
  created_at: Date;
  updated_at: Date;
  id: number;
}

export interface ISignUpResponse {
  user: User;
  token: Token;
}

export interface IBodyEditUserInfo {
  name: string;
  email: string;
}

export interface IPayCreditsResponse {
  email: string;
  name: string;
  credits: number;
  created_at: Date;
  updated_at: Date;
  id: number;
}
