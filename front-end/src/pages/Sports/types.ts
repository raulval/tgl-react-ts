export interface ISportBet {
  id: number;
  home: string;
  guest: string;
  picked: string;
  amount: number;
  odd: number;
  matchWinner: string | null;
  finished: boolean;
  match_id: number;
  user_id: number;
}
