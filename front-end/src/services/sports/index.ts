import { api } from "services/api";
import { useQuery } from "@tanstack/react-query";
import { IGetLeaguesResponse, IGetMatchesResponse } from "./types";

const API_ENDPOINTS = {
  getLeagues: () => `sports/leagues`,
  getMatches: () => `sports/matches`,
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

export { useGetLeagues, useGetMatches };
