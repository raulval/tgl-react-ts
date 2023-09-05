import Account from "pages/Account";
import Lottery from "pages/Lottery";
import Home from "pages/Home";
import Login from "pages/Login";
import NewPassword from "pages/NewPassword";
import Reset from "pages/Reset";
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
          <Route path="/account" element={<Account />} />
        </Routes>
        <ToastContainer limit={3} />
      </PersistGate>
    </Provider>
  );
};

export default Router;
