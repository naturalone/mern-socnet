import React from "react";
import PropTypes from "prop-types";

import "./Register.scss";

const Register = props => {
  return (
    <div className="register">
      <form className="register-form">
        <i className="fas fa-user-plus register-icon"></i>
        <h2>REGISTER</h2>
        <div className="register-form-input">
          <i className="fas fa-user"></i>
          <input type="text" name="login" placeholder="Username" />
        </div>
        <div className="register-form-input">
          <i className="fas fa-key"></i>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div className="register-form-input">
          <i className="fas fa-key"></i>
          <input
            type="password"
            name="password"
            placeholder="Confirm password"
          />
        </div>
        <button className="register-form-submit">Register</button>
      </form>
    </div>
  );
};

Register.propTypes = {};

export default Register;
