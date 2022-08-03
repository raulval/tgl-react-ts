import { configureStore } from "@reduxjs/toolkit";
import betsReducer from "./betSlice";
import gamesReducer from "./gameSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
    bets: betsReducer,
  },
});

export default store;
