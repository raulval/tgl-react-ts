export interface ISportBet {
  id: number;
  home: string;
  guest: string;
  picked: string;
  amount: number;
  odd: number;
  matchWinner: string | null;
  finished: boolean;
  match_id: string;
  user_id: number;
}
