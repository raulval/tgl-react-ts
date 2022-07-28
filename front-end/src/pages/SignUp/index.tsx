import Form from "../../components/Form";
import Slogan from "../../components/Slogan";
import { FormContainer } from "./styles";

const SignUp = () => {
  return (
    <FormContainer>
      <Slogan />
      <Form signup />
    </FormContainer>
  );
};

export default SignUp;
