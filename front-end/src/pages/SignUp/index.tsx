import Form from "components/Form";
import Slogan from "components/Slogan";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import user from "services/user";
import { IBodyAuth } from "shared/interfaces";
import { FormContainer } from "./styles";

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = user();

  const handleSubmit = async ({ name, email, password }: IBodyAuth) => {
    try {
      const response = await toast.promise(signup({ name, email, password }), {
        pending: "Signing up...",
        success: "User created successfully",
      });
      navigate("/");
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.response.data.error.message);
      }
    }
  };

  return (
    <FormContainer>
      <Slogan />
      <Form signup onSubmit={handleSubmit} />
    </FormContainer>
  );
};

export default SignUp;
