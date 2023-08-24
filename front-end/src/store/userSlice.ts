import { createSlice } from "@reduxjs/toolkit";
import { ISignUpResponse } from "shared/interfaces";

export interface UserState {
  isLogged: boolean;
  userData: ISignUpResponse;
}

const initialState = { isLogged: false, userData: {} };

export const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getUser(state, { payload }) {
      return { ...state, isLogged: true, userData: payload };
    },
    logout(state) {
      return {
        ...state,
        isLogged: false,
        userData: {},
      };
    },
  },
});

export const { getUser, logout } = slice.actions;

export const selectUser = (state: { user: UserState }) => state.user;

export default slice.reducer;
