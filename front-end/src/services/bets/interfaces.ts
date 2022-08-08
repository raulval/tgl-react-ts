import {
  BetParams,
  IBodyBets,
  IListBetsResponse,
  INewBetResponse,
} from "shared/interfaces";

export interface IBets {
  newBet: ({ games }: IBodyBets) => Promise<INewBetResponse>;
  listBets: (params: BetParams) => Promise<IListBetsResponse>;
}
