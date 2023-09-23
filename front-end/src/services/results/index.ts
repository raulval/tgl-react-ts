import { api } from "services/api";
import { useQuery } from "@tanstack/react-query";
import { ILotteryResultsResponse, ISportResultsResponse } from "./types";

const API_ENDPOINTS = {
  lotteryResults: (lottery: string) => `results/lottery/${lottery}`,
  getSportResults: (league: string) => `results/sports/${league}`,
};

const useGetLotteryResults = (lottery: string) => {
  return useQuery<ILotteryResultsResponse, Error>({
    queryKey: ["lottery-results"],
    queryFn: async () => {
      const { data } = await api.get(API_ENDPOINTS.lotteryResults(lottery));
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

const useGetSportResults = (league: string) => {
  return useQuery<ISportResultsResponse, Error>({
    queryKey: ["sport-results"],
    queryFn: async () => {
      if (league === "") {
        return null;
      }
      const { data } = await api.get(API_ENDPOINTS.getSportResults(league));
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export { useGetLotteryResults, useGetSportResults };
