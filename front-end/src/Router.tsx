import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import SignUp from "./pages/SignUp";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Router;
