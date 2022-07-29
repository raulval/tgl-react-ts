import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import SignUp from "./pages/SignUp";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer limit={3} />
    </div>
  );
};

export default Router;
