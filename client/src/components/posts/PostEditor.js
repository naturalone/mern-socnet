import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./Posts.scss";

const PostEditor = props => {
  const [formState, setFormState] = useState({
    focused: false,
    currentIndex: 0,
    currentParagraph: ""
  });

  const [formData, setFormData] = useState({
    title: "",
    paragraphs: [
      {
        contentType: "",
        value: ""
      }
    ]
  });

  const setActiveParagraph = e => {
    console.log(e.target);
    setFormState({ ...formState, currentIndex: parseInt(e.target.id) });
  };

  const { paragraphs } = formData;

  const onChange = e => {
    console.log(e.target.id, e.target.value);

    setFormData({
      ...formData,
      paragraphs: [...paragraphs.splice(e.target.id, 1, e.target.value)]
    });
  };

  const captureKey = e => {
    switch (e.key) {
      case "Enter":
    }
  };

  const paragraphCount = paragraphs.length;

  return (
    <div className="post-container">
      {[...Array(paragraphCount).keys()].map(index => {
        return (
          <input
            className="post-editor-paragraph"
            type="text"
            key={index}
            id={index}
            name="text"
            value={paragraphs[index].value}
            onChange={e => onChange(e)}
            onKeyDown={e => captureKey(e)}
            onFocus={e => setActiveParagraph(e)}
          ></input>
        );
      })}
    </div>
  );
};

PostEditor.propTypes = {};

export default PostEditor;
