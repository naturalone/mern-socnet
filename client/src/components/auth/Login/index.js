import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { login } from "../../../actions/auth";

import "./Login.scss";

const Login = ({ login, isAuth }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log(e);
    login(username, password);
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login">
      <form className="login-form" onSubmit={e => onSubmit(e)} id="form-login">
        <i className="fas fa-sign-in-alt login-icon"></i>
        <h2>LOG IN</h2>
        <div className="login-form-input">
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="login-form-input">
          <i className="fas fa-key"></i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <button
          className="login-form-submit"
          type="submit"
          form="form-login"
          value="Submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
