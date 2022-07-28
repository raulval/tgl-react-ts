import { ToastContainer } from "react-toastify";
import Form from "../../components/Form";
import Slogan from "../../components/Slogan";
import { FormContainer } from "./styles";

const Reset = () => {
  const handleSubmit = (data: {}) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <Slogan />
      <Form reset onSubmit={handleSubmit} />
      <ToastContainer limit={3} />
    </FormContainer>
  );
};

export default Reset;
