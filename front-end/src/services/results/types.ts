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
