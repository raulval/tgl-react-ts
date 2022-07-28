import Form from "../../components/Form";
import Slogan from "../../components/Slogan";
import { FormContainer } from "./styles";

const Login = () => {
  return (
    <FormContainer>
      <Slogan />
      <Form login />
    </FormContainer>
  );
};

export default Login;
