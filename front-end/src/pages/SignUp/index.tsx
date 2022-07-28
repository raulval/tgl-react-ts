import { ToastContainer } from "react-toastify";
import Form from "../../components/Form";
import Slogan from "../../components/Slogan";
import { FormContainer } from "./styles";

const SignUp = () => {
  const handleSubmit = (data: {}) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <Slogan />
      <Form signup onSubmit={handleSubmit} />
      <ToastContainer limit={3} />
    </FormContainer>
  );
};

export default SignUp;
