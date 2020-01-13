import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { loadPost } from "../../actions/post";

const Post = ({ post, loadPost }) => {
  const { id } = useParams();

  const { title, content } = post.post;

  useEffect(() => {
    loadPost(id);
  }, []);

  return (
    <div className="post-container">
      {post.loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="post-content">
          <h2 className="post-content-title">{title}</h2>
          <br />
          {content.map(p => {
            switch (p.content_type) {
              case "img":
                return <img className="post-content-img" src={p.value}></img>;
              case "text":
                return <p className="post-content-paragraph">{p.value}</p>;
              default:
                return <p>{p.value}</p>;
            }
          })}
        </div>
      )}
    </div>
  );
};

Post.propTypes = {
  loadPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = store => ({
  post: store.post
});

export default connect(mapStateToProps, { loadPost })(Post);
