import { api } from "services/api";
import { useQuery } from "@tanstack/react-query";
import { ILotteryResultsResponse } from "./types";

const API_ENDPOINTS = {
  lotteryResults: (lottery: string) => `results/lottery/${lottery}`,
};

const useGetLotteryResults = (lottery: string) => {
  return useQuery<ILotteryResultsResponse, Error>(
    ["lottery-results"],
    async () => {
      const { data } = await api.get(API_ENDPOINTS.lotteryResults(lottery));
      return data;
    }
  );
};

export { useGetLotteryResults };
