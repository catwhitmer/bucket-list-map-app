import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // To-Do

    try {
      const userCredential = await dispatch();

      if (userCredential) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Bad User Credentials");
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Sign Up!</p>
      </header>

      <form className="form" onSubmit={onSubmit}>
      <input
          className="formInput"
          type="username"
          placeholder="username"
          id="username"
          value={username}
          onChange={onChange}
        />
        
        <input
          className="formInput"
          type="email"
          placeholder="email"
          id="email"
          value={email}
          onChange={onChange}
        />

        <div className="passwordInputDiv">
          <input
            className="formInput"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            id="password"
            value={password}
            onChange={onChange}
          />

          <VisibilityIcon
            className="showPassword"
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        </div>

        <div className="signUpBar">
          <p className="signUpText">Sign Up</p>
          <button className="button">
            <ArrowCircleRightRoundedIcon className="arrowButton" />
          </button>
        </div>

        <Link className="forgotPasswordLink" to="/forgot-password">
          Forgot Password
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
