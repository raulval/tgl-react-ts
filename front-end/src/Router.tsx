import {
  Login,
  Reset,
  NewPassword,
  Home,
  Lottery,
  Account,
  Results,
  Sports,
} from "pages";
import SignUp from "pages/SignUp";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store";

const Router = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lottery" element={<Lottery />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/account" element={<Account />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        <ToastContainer limit={3} />
      </PersistGate>
    </Provider>
  );
};

export default Router;
