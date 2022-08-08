interface BetsData {
  game_id: number;
  numbers: number[];
}

export interface IBodyBets {
  games: BetsData[];
}

export interface INewBetResponse {
  bet: Bet[];
}

interface Bet {
  choosen_numbers: string;
  user_id: number;
  game_id: number;
  price: number;
  created_at: Date;
  updated_at: Date;
  id: number;
}

export interface ICartBets {
  game_id: number;
  numbers: number[];
  color: string;
  type: string;
  price: number;
}

export interface IListBetsResponse {
  data: IBets[];
}

export interface IBets {
  id: number;
  user_id: number;
  game_id: number;
  choosen_numbers: string;
  price: number;
  created_at: Date;
  type: Type;
}

interface Type {
  id: number;
  type: string;
  color: string;
}

export interface BetParams {
  params?: BetTypeParams;
}

interface BetTypeParams {
  "type[]": string[];
}
