import React from "react";
import PropTypes from "prop-types";

import "./Login.scss";

const Login = props => {
  return (
    <div className="login">
      <form className="login-form">
        <i className="fas fa-sign-in-alt login-icon"></i>
        <h2>LOG IN</h2>
        <div className="login-form-input">
          <i className="fas fa-user"></i>
          <input type="text" name="login" placeholder="Username" />
        </div>
        <div className="login-form-input">
          <i className="fas fa-key"></i>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button className="login-form-submit">Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
