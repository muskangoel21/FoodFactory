import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <img src={img} alt="Food Factory"></img>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
