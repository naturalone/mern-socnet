import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import "./Posts.scss";

const PostJumbo = ({ post: { title, _id } }) => {
  return (
    <div className="post-jumbotron">
      <div className="post-jumbotron-left">
        <Link to={`/post/${_id}`}>
          <img
            src="https://i.ibb.co/0Qtwk9P/157886757973501354.jpg"
            alt="157886757973501354"
          />
        </Link>
      </div>
      <div className="post-jumbotron-right">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
          <h5>
            Phasellus congue libero sed enim volutpat lobortis. Proin tristique
            tellus nisl, non vestibulum felis dictum eu.
          </h5>
        </Link>
        <p>Nikita Agarkov</p>
      </div>
    </div>
  );
};

PostJumbo.propTypes = {};

export default connect()(PostJumbo);
