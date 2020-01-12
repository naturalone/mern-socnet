import React from "react";
import PropTypes from "prop-types";
import PostJumbo from "../../posts/PostJumbo";

import "./Feed.scss";

const Feed = props => {
  return (
    <div className="feed-container">
      <PostJumbo />
      <PostJumbo />
      <PostJumbo />
    </div>
  );
};

Feed.propTypes = {};

export default Feed;
