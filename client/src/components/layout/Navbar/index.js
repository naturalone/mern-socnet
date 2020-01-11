import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../../../actions/auth";

import "./Navbar.scss";

const Navbar = ({ auth: { isAuth, loading }, logout }) => {
  const guestNav = (
    <div className="navbar-toolbar">
      <Link to="/register">
        <i className="fas fa-user-plus"></i>
        <h3>REGISTER</h3>
      </Link>
      <Link to="/login">
        <i className="fas fa-sign-in-alt"></i>
        <h3>LOGIN</h3>
      </Link>
    </div>
  );

  const authNav = (
    <div className="navbar-toolbar">
      <a onClick={logout} href="#!">
        <i class="fas fa-sign-out-alt"></i>
        <h3>LOG OUT</h3>
      </a>
    </div>
  );

  return (
    <div className="navbar">
      <Link to="/">
        <h3 className="navbar-title">Medium.</h3>
      </Link>
      {!loading && <Fragment>{isAuth ? authNav : guestNav}</Fragment>}
    </div>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
