import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PostJumbo from "../../posts/PostJumbo";

import axios from "axios";
import { connect } from "react-redux";
import { loadPosts } from "../../../actions/posts";

import "./Feed.scss";

const Feed = ({ posts, loadPosts }) => {
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="feed-container">
      {posts.loading ? (
        <h1>Loading...</h1>
      ) : (
        posts.posts.map(post => {
          console.log(post);
          return <PostJumbo key={post._id} post={post} />;
        })
      )}
    </div>
  );
};

Feed.propTypes = {
  posts: PropTypes.object.isRequired,
  loadPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { loadPosts })(Feed);
