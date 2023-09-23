import { IMatch, IParticipants } from "services/sports/types";

export interface ILotteryResultsResponse {
  name: string;
  date: string;
  contest: string;
  numbers: number[];
  prizes: Prize[];
  totalPrize: string;
  lotteryColor: string;
}

export interface Prize {
  scores: string;
  winners: number;
  prize: string;
}

export type ISportResultsResponse = ISportResult[];

export interface ISportResult {
  result: IResult;
  sportBet?: ISportBet;
}

export interface IResult {
  id: number;
  winner: string;
  score: IScore;
  participants: IParticipants;
  started_date: number;
  match_id: string;
  created_at: string;
  updated_at: string;
  league: string;
  match: IMatch;
}

export interface IScore {
  home: number;
  guest: number;
}

export interface ISportBet {
  id: number;
  match_id: string;
  user_id: number;
  picked: string;
  odd: number;
  amount: number;
  earning: number;
  created_at: string;
  updated_at: string;
}
