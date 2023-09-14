import { createSlice } from "@reduxjs/toolkit";
import { IGetLeaguesResponse } from "services/sports/types";

export interface LeagueState {
  leaguesData: IGetLeaguesResponse;
}

const initialState = { leaguesData: {} };

export const slice = createSlice({
  name: "leagues",
  initialState: initialState,
  reducers: {
    setLeagues(state, { payload }) {
      return { ...state, leaguesData: payload };
    },
  },
});

export const { setLeagues } = slice.actions;

export const selectLeagues = (state: { leagues: LeagueState }) => state.leagues;

export default slice.reducer;
