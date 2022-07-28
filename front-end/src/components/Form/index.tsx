import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MdEast, MdWest } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { FormMain } from "./styles";

type SubmitForm = {
  email?: string;
  password?: string;
  name?: string;
};

interface FormProps {
  login?: boolean;
  reset?: boolean;
  signup?: boolean;
  onSubmit: (data: SubmitForm) => void;
}

const validationLogin = yup.object({
  email: yup.string().required("Email is required").email("Invalid Email"),
  password: yup.string().required("Password is required"),
});

const validationReset = yup.object({
  email: yup.string().required("Email is required").email("Invalid Email"),
});

const validationSignUp = yup.object({
  name: yup.string().required("Name is required").min(3, "Name is too short"),
  email: yup.string().required("Email is required").email("Invalid Email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const Form = (props: FormProps) => {
  let validation;

  if (props.login) {
    validation = validationLogin;
  } else if (props.reset) {
    validation = validationReset;
  } else {
    validation = validationSignUp;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitForm>({
    resolver: yupResolver(validation),
  });

  const onError = (error: any) => {
    toast.error("Data is invalid");
  };

  return (
    <FormMain>
      {props.login && <h1>Authentication</h1>}
      {props.reset && <h1>Reset password</h1>}
      {props.signup && <h1>Registration</h1>}
      <form onSubmit={handleSubmit(props.onSubmit, onError)}>
        {props.signup && (
          <input type="text" placeholder="Name" {...register("name")} />
        )}
        {errors.name && <span>{errors.name.message}</span>}
        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
        {props.login || props.signup ? (
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        ) : null}
        {errors.password && <span>{errors.password.message}</span>}

        {props.login && (
          <div className="forget-pwd">
            <Link to="/reset">I forgot my password</Link>
          </div>
        )}

        <div className="submit-btn">
          {props.login && (
            <button type="submit">
              Log In <MdEast />
            </button>
          )}
          {props.reset && (
            <button type="submit">
              Send link <MdEast />
            </button>
          )}
          {props.signup && (
            <button type="submit">
              Register <MdEast />
            </button>
          )}
        </div>
      </form>

      <div className="signup-btn">
        {props.login ? (
          <Link to="/signup">
            Sign Up <MdEast />
          </Link>
        ) : (
          <Link to="/">
            <MdWest style={{ marginRight: "20px" }} />
            Back
          </Link>
        )}
      </div>
    </FormMain>
  );
};

export default Form;
