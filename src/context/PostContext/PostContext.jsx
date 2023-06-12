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

  const getData = async () => {
    try {
      const response = await fetch("/api/posts");
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
    <PostContext.Provider value={{ postStates, getData }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
