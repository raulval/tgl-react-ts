import { createSlice } from "@reduxjs/toolkit";

export interface BetState {
  BetsData: {};
}

const initialState = { BetsData: {} };

export const slice = createSlice({
  name: "bets",
  initialState: initialState,
  reducers: {
    setBets(state, { payload }) {
      return { ...state, BetsData: payload };
    },
  },
});

export const { setBets } = slice.actions;

export const selectBets = (state: { bets: BetState }) => state.bets;

export default slice.reducer;
