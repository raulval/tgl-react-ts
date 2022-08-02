import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gameSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
  },
});

export default store;
