import {
  IBodyAuth,
  IChangePasswordResponse,
  ILoginResponse,
  IResetResponse,
} from "shared/interfaces";

export interface IAuth {
  login: ({ email, password }: IBodyAuth) => Promise<ILoginResponse>;
  reset: ({ email }: IBodyAuth) => Promise<IResetResponse>;
  changePassword: ({
    password,
    confirm_password,
  }: IBodyAuth) => Promise<IChangePasswordResponse>;
}
