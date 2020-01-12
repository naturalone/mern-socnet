import React from "react";
import PropTypes from "prop-types";

import "./Posts.scss";

const PostJumbo = props => {
  return (
    <div className="post-jumbotron">
      <div className="post-jumbotron-left">
        <img
          src="https://i.ibb.co/p3FfZbM/1489595073194798750.jpg"
          alt="1489595073194798750"
        />
      </div>
      <div className="post-jumbotron-right">
        <div>
          <h2>Title of the post</h2>
          <h5>
            Phasellus congue libero sed enim volutpat lobortis. Proin tristique
            tellus nisl, non vestibulum felis dictum eu.
          </h5>
        </div>
        <p>Nikita Agarkov</p>
      </div>
    </div>
  );
};

PostJumbo.propTypes = {};

export default PostJumbo;
