import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../../components/Form";
import Slogan from "../../components/Slogan";
import { FormContainer } from "./styles";

const Login = () => {
  const handleSubmit = (data: {}) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <Slogan />
      <Form login onSubmit={handleSubmit} />
      <ToastContainer limit={3} />
    </FormContainer>
  );
};

export default Login;
