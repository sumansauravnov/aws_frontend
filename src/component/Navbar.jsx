import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-10">
      <Link to="/register">
        <p>Register</p>
      </Link>
      <Link to="/login">
        <p>Login</p>
      </Link>
      <Link to="/">
        <p>Products</p>
      </Link>
    </div>
  );
};

export default Navbar;
