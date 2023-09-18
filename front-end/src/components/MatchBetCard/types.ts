import { IGetMatchesResponse, IMatch } from "services/sports/types";

export interface MatchBetCardProps {
  matchesData: IGetMatchesResponse | undefined;
  isLoadingMatches: boolean;
  isRefetching: boolean;
  selectedOdd?: { picked: string; odd: number };
  onClickOddButton: (odd?: { picked: string; odd: number }) => void;
  onClickSaveBet: (match: IMatch) => void;
  selectedAmount: number | undefined;
  setSelectedAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
}
