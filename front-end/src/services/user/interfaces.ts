import {
  IBodyAuth,
  IBodyEditUserInfo,
  IPayCreditsResponse,
  IResetResponse,
  ISignUpResponse,
} from "shared/interfaces";

export interface IUser {
  signup: ({ email, password, name }: IBodyAuth) => Promise<ISignUpResponse>;
  editUserInfo: ({ name, email }: IBodyEditUserInfo) => Promise<IResetResponse>;
  payCredits: (credits: number) => Promise<IPayCreditsResponse>;
}
