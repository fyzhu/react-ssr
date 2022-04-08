import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
};
export default Header;
