import Form from "../../components/Form";
import Slogan from "../../components/Slogan";
import { FormContainer } from "./styles";

const Reset = () => {
  return (
    <FormContainer>
      <Slogan />
      <Form reset />
    </FormContainer>
  );
};

export default Reset;
