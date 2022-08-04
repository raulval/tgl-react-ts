import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../../components/Form";
import Slogan from "../../components/Slogan";
import { api } from "../../services/api";
import { FormContainer } from "./styles";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: {}) => {
    try {
      const response = await toast.promise(api.post("user/create", data), {
        pending: "Signing up...",
        success: "User created successfully",
      });
      navigate("/");
    } catch (error: any) {
      toast.error(error.response.data.error.message);
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
