import { createSlice } from "@reduxjs/toolkit";
import { ISignUpResponse } from "shared/interfaces";

export interface UserState {
  isLogged: boolean;
  userData: ISignUpResponse;
  credits: number;
}

const initialState = {
  isLogged: false,
  userData: {},
  credits: 0,
};

export const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, { payload }) {
      return { ...state, isLogged: true, userData: payload };
    },
    setCredits(state, { payload }) {
      return {
        ...state,
        credits: payload,
      };
    },
    logout() {
      return {
        ...initialState,
      };
    },
  },
});

export const { setUser, logout, setCredits } = slice.actions;

export const selectUser = (state: { user: UserState }) => state.user;

export default slice.reducer;
