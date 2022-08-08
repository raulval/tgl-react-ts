interface Token {
  type: string;
  token: string;
  expires_at: Date;
}

interface User {
  email: string;
  name: string;
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
