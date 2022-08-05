import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import Bet from "./pages/Bet";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import SignUp from "./pages/SignUp";
import { persistor, store } from "./store";

const Router = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bet" element={<Bet />} />
        </Routes>
        <ToastContainer limit={3} />
      </PersistGate>
    </Provider>
  );
};

export default Router;
