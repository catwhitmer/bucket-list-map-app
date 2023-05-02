import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="home-link">
        <Link className="link" to="/">
          Home
        </Link>
      </div>
      <div className="nav-links">
        <Link className="link" to="/sign-in">
          Sign In
        </Link>
        <Link className="link" to="/sign-up">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
