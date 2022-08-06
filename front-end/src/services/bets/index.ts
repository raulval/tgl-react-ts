import { api } from "services/api";
import { IBodyBets, INewBetResponse } from "shared/interfaces";

import { IBets } from "./interfaces";

const bets = (): IBets => {
  const newBet = async (body: IBodyBets): Promise<INewBetResponse> => {
    return api.post("bet/new-bet", body);
  };

  return { newBet };
};

export default bets;
