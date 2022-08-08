import {
  IBodyAuth,
  IBodyEditUserInfo,
  IResetResponse,
  ISignUpResponse,
} from "shared/interfaces";

export interface IUser {
  signup: ({ email, password, name }: IBodyAuth) => Promise<ISignUpResponse>;
  editUserInfo: ({ name, email }: IBodyEditUserInfo) => Promise<IResetResponse>;
}
