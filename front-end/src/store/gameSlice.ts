import { createSlice } from "@reduxjs/toolkit";
import { GameData } from "shared/interfaces";

export interface GameState {
  gamesData: GameData;
}

const initialState = { gamesData: {} };

export const slice = createSlice({
  name: "games",
  initialState: initialState,
  reducers: {
    getGames(state, { payload }) {
      return { ...state, gamesData: payload };
    },
  },
});

export const { getGames } = slice.actions;

export const selectGames = (state: { games: GameState }) => state.games;

export default slice.reducer;
