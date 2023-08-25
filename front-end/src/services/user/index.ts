import { api } from "services/api";
import {
  IBodyAuth,
  IBodyEditUserInfo,
  IGetUserResponse,
  IPayCreditsResponse,
  IResetResponse,
  ISignUpResponse,
} from "shared/interfaces";
import { IUser } from "./interfaces";

const user = (): IUser => {
  const signup = async (body: IBodyAuth): Promise<ISignUpResponse> => {
    return api.post("user/create", body);
  };
  const editUserInfo = async (
    body: IBodyEditUserInfo
  ): Promise<IResetResponse> => {
    return api.put("user/update", body);
  };

  const payCredits = async (credits: number): Promise<IPayCreditsResponse> => {
    return api.post("user/pay-credits", { credits });
  };

  const getUser = async (): Promise<IGetUserResponse> => {
    return api.get("user/my-account");
  };

  return { signup, editUserInfo, payCredits, getUser };
};

export default user;
