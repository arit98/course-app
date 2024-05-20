import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="header">
        <div className="logo">Logo</div>
        <div className="user">
          <div className="login">Login</div>
          <div className="signup">Signup</div>
        </div>
      </div>

      <div className="navul">
        <ul>
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/curriculum">Curriculum</Link>
          </li>
          <li>
            <Link to="/refund">Refund</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
