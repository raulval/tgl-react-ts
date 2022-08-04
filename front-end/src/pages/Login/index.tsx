import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../../components/Form";
import Slogan from "../../components/Slogan";
import { api } from "../../services/api";
import { getUser, UserState } from "../../store/userSlice";
import { FormContainer } from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state: { user: UserState }) => state.user);

  const handleSubmit = async (data: {}) => {
    try {
      const response = await toast.promise(api.post("login", data), {
        pending: "Logging in...",
        success: "Logged in successfully",
      });
      dispatch(getUser(response.data));
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
function getToken(token: any): any {
  throw new Error("Function not implemented.");
}
