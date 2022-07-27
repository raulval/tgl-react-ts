import { MdEast } from "react-icons/md";
import { LoginMain } from "./styles";

const LoginForm = () => {
  return (
    <LoginMain>
      <h1>Authentication</h1>
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="forget-pwd">
          <a href="#">I forget my password</a>
        </div>

        <div className="login-btn">
          <a href="#">
            Log In <MdEast />
          </a>
        </div>
      </form>

      <div className="signup-btn">
        <a href="#">
          Sign Up <MdEast />
        </a>
      </div>
    </LoginMain>
  );
};

export default LoginForm;
