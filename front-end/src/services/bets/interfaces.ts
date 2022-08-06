import { IBodyBets, INewBetResponse } from "shared/interfaces";

export interface IBets {
  newBet: ({ games }: IBodyBets) => Promise<INewBetResponse>;
}
