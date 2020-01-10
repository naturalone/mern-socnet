import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = props => {
  return (
    <div className="navbar">
      <h3 className="navbar-title">Medium.</h3>
      <div className="navbar-toolbar">
        <Link to="/register">
          <i className="fas fa-user-plus"></i>
          <h3>register</h3>
        </Link>
        <Link to="/login">
          <i className="fas fa-sign-in-alt"></i>
          <h3>login</h3>
        </Link>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
