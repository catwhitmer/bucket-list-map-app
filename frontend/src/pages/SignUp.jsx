import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // To-Do
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Sign Up!</p>
      </header>

      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          onChange={onChange}
        />

        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={onChange}
        />

        <div className="passwordInputDiv">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            value={password}
            onChange={onChange}
          />

          <VisibilityIcon
            className="showPassword"
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        </div>

        <Link className="forgotPasswordLink" to="/forgot-password">
          Forgot Password
        </Link>

        <div className="signUpBar">
          <p className="signUpText">Sign Up</p>
          <button className="signUpButton">
            <ArrowCircleRightRoundedIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
