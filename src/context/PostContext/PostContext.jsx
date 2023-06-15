import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialState } from "../../Reducer/PostReducer/PostReducer";
import { postReducer } from "../../Reducer/PostReducer/PostReducer";

export const PostContext = createContext();
export const PostProvider = ({ children }) => {
  const [postStates, postDispatch] = useReducer(postReducer, initialState);
  const token = localStorage.getItem("token");

  const getData = async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();

      postDispatch({ type: "GET_POSTS", payload: data });
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
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
