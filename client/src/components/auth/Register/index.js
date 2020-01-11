import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { register } from "../../../actions/auth";

import "./Register.scss";

const Register = ({ isAuth, register }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const { email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("passwords dont match");
      // @todo -- alerts
    } else {
      register({ email, password });
    }
  };

  if (isAuth) return <Redirect to="/" />;

  return (
    <div className="register">
      <form className="register-form" id="form-register" onSubmit={onSubmit}>
        <i className="fas fa-user-plus register-icon"></i>
        <h2>REGISTER</h2>
        <div className="register-form-input">
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="email"
            placeholder="Username"
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="register-form-input">
          <i className="fas fa-key"></i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="register-form-input">
          <i className="fas fa-key"></i>
          <input
            type="password"
            name="password2"
            placeholder="Confirm password"
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <button
          className="register-form-submit"
          form="form-register"
          value="Submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

Register.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { register })(Register);
