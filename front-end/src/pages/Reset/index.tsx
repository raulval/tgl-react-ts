import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "../../components/Form";
import Slogan from "../../components/Slogan";
import { api } from "../../services/api";
import { FormContainer } from "./styles";

const Reset = () => {
  const handleSubmit = async (data: {}) => {
    try {
      const response = await toast.promise(api.post("reset", data), {
        pending: "Resetting...",
        success: "Password reset successfully",
      });
      console.log(response.data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
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
