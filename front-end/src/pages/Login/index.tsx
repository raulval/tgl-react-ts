import LoginForm from "../../components/LoginForm";
import Slogan from "../../components/Slogan";
import { LoginContainer } from "./styles";

const Login = () => {
  return (
    <LoginContainer>
      <Slogan />
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
