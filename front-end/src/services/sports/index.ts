import { api } from "services/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  ICreateBetBody,
  ICreateBetResponse,
  IGetLeaguesResponse,
  IGetMatchesResponse,
  IGetSportBetsResponse,
} from "./types";

const API_ENDPOINTS = {
  getLeagues: () => `sports/leagues`,
  getMatches: () => `sports/matches`,
  createSportBet: () => `sports/new-bet`,
  getSportBets: () => `sports/bets`,
};

const useGetLeagues = () => {
  return useQuery<IGetLeaguesResponse, Error>({
    queryKey: ["get-leagues"],
    queryFn: async () => {
      const { data } = await api.get(API_ENDPOINTS.getLeagues());
      return data;
    },

    refetchOnWindowFocus: false,
  });
};

const useGetMatches = (leagueShortName: string) => {
  return useQuery<IGetMatchesResponse, Error>({
    queryKey: ["get-matches"],
    queryFn: async () => {
      const { data } = await api.get(API_ENDPOINTS.getMatches(), {
        params: {
          league: leagueShortName,
        },
      });
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

const useCreateSportBet = () => {
  return useMutation<ICreateBetResponse, Error, ICreateBetBody>({
    mutationKey: ["create-sport-bet"],
    mutationFn: async (body: ICreateBetBody) => {
      const { data } = await api.post(API_ENDPOINTS.createSportBet(), body);
      return data;
    },
  });
};

const useGetSportBets = (leagueNames: string[]) => {
  return useQuery<IGetSportBetsResponse, Error>({
    queryKey: ["get-sport-bets"],
    queryFn: async () => {
      const { data } = await api.get(API_ENDPOINTS.getSportBets(), {
        params:
          {
            league: leagueNames,
          } || undefined,
      });
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export { useGetLeagues, useGetMatches, useCreateSportBet, useGetSportBets };
