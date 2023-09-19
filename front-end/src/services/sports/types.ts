export interface IGetLeaguesResponse {
  leagues: League[];
}

export interface League {
  id: number;
  name: string;
  short_name: string;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
}

export interface IGetMatchesResponse {
  matches: IMatch[];
}

export interface IMatch {
  id: string;
  name: string;
  start_time: number;
  participants: IParticipants;
  odds: IOdds;
  league_id: number;
  created_at: string;
  updated_at: string;
}

export interface IParticipants {
  home: string;
  guest: string;
}

export interface IOdds {
  home: number;
  draw: number;
  guest: number;
}

export interface ICreateBetBody {
  match_id: string;
  odd: number;
  amount: number;
  picked: string;
}

export interface ICreateBetResponse {
  user_id: number;
  odd: number;
  amount: number;
  picked: string;
  earnings: number;
  match: IMatch;
  credits: number;
}

export type IGetSportBetsResponse = ISportBet[];

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
  match: IMatch;
}
