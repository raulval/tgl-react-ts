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
