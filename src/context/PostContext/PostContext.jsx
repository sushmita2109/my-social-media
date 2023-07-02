import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState } from "../../Reducer/PostReducer/PostReducer";
import { postReducer } from "../../Reducer/PostReducer/PostReducer";
import axios from "axios";
import { useAuth } from "../AuthContext/AuthContext";

export const PostContext = createContext();
export const PostProvider = ({ children }) => {
  const [postStates, postDispatch] = useReducer(postReducer, initialState);
  const token = localStorage.getItem("token");
  const { authStates } = useAuth();
  const headers = {
    authorization: token,
  };

  const getData = async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();

      postDispatch({ type: "GET_POSTS", payload: data });
    } catch (e) {
      console.log(e);
    }
  };

  const getDeletedData = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
        body: JSON.stringify(postId),
      });
      const data = await response.json();
      postDispatch({ type: "DELETED_DATA", payload: data });
    } catch (e) {
      console.log(e.message);
    }
  };

  const getEditPost = async (postId, content) => {
    try {
      const response = await fetch(`/api/posts/edit/${postId}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ postData: { content: content } }),
      });
      const data = await response.json();
      postDispatch({ type: "EDIT_POST", payload: data });
    } catch (e) {
      console.log(e);
    }
  };

  const addBookMark = async (post) => {
    try {
      const response = await fetch(`/api/users/bookmark/${post._id}/`, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
    } catch (e) {
      console.log(e);
    }
  };

  const removeBookMark = async (post) => {
    try {
      const response = await fetch(`/api/users/remove-bookmark/${post._id}/`, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
    } catch (e) {
      console.log(e);
    }
  };

  const updateUnlikePost = async (post) => {
    try {
      const response = await fetch(`api/posts/dislike/${post._id}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      postDispatch({ type: "GET_POSTS", payload: data });
    } catch (e) {
      console.log(e);
    }
  };
  const updateLikes = async (post) => {
    try {
      const response = await fetch(`api/posts/like/${post._id}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });

      const data = await response.json();
      postDispatch({ type: "GET_POSTS", payload: data });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PostContext.Provider
      value={{
        postStates,
        getData,
        updateLikes,
        updateUnlikePost,
        addBookMark,
        removeBookMark,
        postDispatch,
        getDeletedData,
        getEditPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
