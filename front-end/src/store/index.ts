import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import betsReducer from "./betSlice";
import gamesReducer from "./gameSlice";
import userReducer from "./userSlice";

const reducers = combineReducers({
  user: userReducer,
  games: gamesReducer,
  bets: betsReducer,
});

const persistConfig = {
  key: "TGL",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);

export { store, persistor };
