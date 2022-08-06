import Form from "components/Form";
import Slogan from "components/Slogan";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "services";
import { IBodyAuth } from "shared/interfaces";
import { getUser, UserState } from "store/userSlice";
import { FormContainer } from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state: { user: UserState }) => state.user);
  const { login } = auth();

  const handleSubmit = async ({ email, password }: IBodyAuth) => {
    try {
      const response = await toast.promise(login({ email, password }), {
        pending: "Logging in...",
        success: "Logged in successfully",
      });
      dispatch(getUser(response.data));
      localStorage.setItem("userToken", response.data.token.token);
      navigate("/home");
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, []);

  return (
    <FormContainer>
      <Slogan />
      <Form login onSubmit={handleSubmit} />
    </FormContainer>
  );
};

export default Login;
