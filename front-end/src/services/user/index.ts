import { api } from "services/api";
import { IBodyAuth, ISignUpResponse } from "shared/interfaces";
import { IUser } from "./interfaces";

const user = (): IUser => {
  const signup = async (body: IBodyAuth): Promise<ISignUpResponse> => {
    return api.post("user/create", body);
  };

  return { signup };
};

export default user;
