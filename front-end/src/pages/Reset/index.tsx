import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "services";
import { IBodyAuth } from "shared/interfaces";

import Form from "components/Form";
import Slogan from "components/Slogan";
import { FormContainer } from "./styles";

const Reset = () => {
  const { reset } = auth();
  const navigate = useNavigate();

  const handleSubmit = async ({ email }: IBodyAuth) => {
    try {
      const response = await toast.promise(reset({ email }), {
        pending: "Sending reset email...",
        success: "Reset email sent successfully",
      });
      localStorage.setItem("resetToken", response.data.token);
      navigate(`/new-password`);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <FormContainer>
      <Slogan />
      <Form reset onSubmit={handleSubmit} />
    </FormContainer>
  );
};

export default Reset;
