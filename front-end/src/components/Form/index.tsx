import { MdEast, MdWest } from "react-icons/md";
import { Link } from "react-router-dom";
import { FormMain } from "./styles";

type FormProps = {
  login?: boolean;
  reset?: boolean;
  signup?: boolean;
  // handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = (props: FormProps) => {
  return (
    <FormMain>
      {props.login && <h1>Authentication</h1>}
      {props.reset && <h1>Reset password</h1>}
      {props.signup && <h1>Registration</h1>}
      <form>
        {props.signup && <input type="text" placeholder="Name" />}
        <input type="email" placeholder="Email" />
        {props.login || props.signup ? (
          <input type="password" placeholder="Password" />
        ) : null}

        {props.login && (
          <div className="forget-pwd">
            <Link to="/reset">I forget my password</Link>
          </div>
        )}

        <div className="submit-btn">
          {props.login && (
            <Link to="#">
              Log In <MdEast />
            </Link>
          )}
          {props.reset && (
            <Link to="#">
              Send link <MdEast />
            </Link>
          )}
          {props.signup && (
            <Link to="#">
              Register <MdEast />
            </Link>
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
