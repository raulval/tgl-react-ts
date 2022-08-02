import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Bet from "./pages/Bet";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import SignUp from "./pages/SignUp";
import store from "./store";

const Router = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bet" element={<Bet />} />
      </Routes>
      <ToastContainer limit={3} />
    </Provider>
  );
};

export default Router;
