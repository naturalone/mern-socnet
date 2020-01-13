import axios from "axios";
import { LOAD_POST, LOAD_POST_FAILURE } from "./types";

export const loadPost = id => async dispatch => {
  try {
    const res = await axios.get(`/api/posts/${id}`);

    dispatch({
      type: LOAD_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOAD_POST_FAILURE,
      payload: {
        msg: err.response.statusText,
        status: err.response.state
      }
    });
  }
};
