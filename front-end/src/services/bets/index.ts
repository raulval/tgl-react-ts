import { api } from "services/api";
import {
  BetParams,
  IBodyBets,
  IListBetsResponse,
  INewBetResponse,
} from "shared/interfaces";

import { IBets } from "./interfaces";

const bets = (): IBets => {
  const newBet = async (body: IBodyBets): Promise<INewBetResponse> => {
    return api.post("bet/new-bet", body);
  };
  const listBets = async (params: BetParams): Promise<IListBetsResponse> => {
    return api.get("bet/all-bets", params);
  };

  return { newBet, listBets };
};

export default bets;
