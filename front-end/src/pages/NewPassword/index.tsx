import { yupResolver } from "@hookform/resolvers/yup";
import Slogan from "components/Slogan";
import { useForm } from "react-hook-form";
import { MdEast, MdWest } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "services";
import { IBodyAuth } from "shared/interfaces";
import * as yup from "yup";
import { FormContainer, FormMain } from "./styles";

const validation = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirm_password: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const NewPassword = () => {
  const navigate = useNavigate();
  const { changePassword } = auth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBodyAuth>({
    resolver: yupResolver(validation),
  });

  const handleSubmitForm = async ({
    password,
    confirm_password,
  }: IBodyAuth) => {
    try {
      const response = await toast.promise(
        changePassword({ password, confirm_password }),
        {
          pending: "Changing password...",
          success: "Password changed successfully",
        }
      );
      navigate(`/`);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <FormContainer>
      <Slogan />
      <FormMain>
        <h1>Change password</h1>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <input
            type="password"
            placeholder="New password"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <input
            type="password"
            placeholder="Confirm password"
            {...register("confirm_password")}
          />
          {errors.confirm_password && (
            <span>{errors.confirm_password.message}</span>
          )}

          <div className="submit-btn">
            <button type="submit">
              Change <MdEast />
            </button>
          </div>
        </form>

        <div className="signup-btn">
          <Link to="/reset">
            <MdWest style={{ marginRight: "20px" }} />
            Back
          </Link>
        </div>
      </FormMain>
    </FormContainer>
  );
};

export default NewPassword;
