import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../../../actions/auth";

import "./Navbar.scss";

const Navbar = ({ auth: { isAuth, loading, user }, logout }) => {
  const guestNav = (
    <div className="navbar-toolbar navbar-toolbar-item">
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
    <Fragment>
      <div className="navbar-toolbar-story navbar-toolbar-item">
        <Link to="/editor">
          <i className="fas fa-feather-alt"></i>
          <h3>NEW STORY</h3>
        </Link>
      </div>
      <div className="navbar-toolbar">
        <h3 className="navbar-toolbar-username">
          {/*loading ? "" : user.email*/}
        </h3>
        <div className="navbar-toolbar-item">
          <a onClick={logout} href="#!">
            <i className="fas fa-sign-out-alt"></i>
            <h3>LOG OUT</h3>
          </a>
        </div>
      </div>
    </Fragment>
  );

  return (
    <div className="navbar">
      <Link to="/">
        <h3 className="navbar-title">notMedium.</h3>
      </Link>
      {!loading && <Fragment>{isAuth ? authNav : guestNav}</Fragment>}
    </div>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  auth: store.auth,
  user: store.user
});

export default connect(mapStateToProps, { logout })(Navbar);
