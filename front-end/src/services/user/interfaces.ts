import { IBodyAuth, ISignUpResponse } from "shared/interfaces";

export interface IUser {
  signup: ({ email, password, name }: IBodyAuth) => Promise<ISignUpResponse>;
}
