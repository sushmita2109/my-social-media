import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState } from "../../Reducer/PostReducer/PostReducer";
import { postReducer } from "../../Reducer/PostReducer/PostReducer";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../AuthContext/AuthContext";

export const PostContext = createContext();
export const PostProvider = ({ children }) => {
  const [postStates, postDispatch] = useReducer(postReducer, initialState);

  const { authState } = useAuth();

  const getAllUsers = async () => {
    try {
      const { data, status } = await axios.get("/api/users");
      if (status === 200) {
        postDispatch({ type: "SET_ALL_USERS", payload: data?.users });
      }
    } catch (e) {
      toast.error(e.response.data.errors[0]);
    }
  };

  const getData = async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();

      postDispatch({ type: "GET_POSTS", payload: data.posts });
    } catch (e) {
      console.log(e);
    }
  };

  const getDeletedData = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          authorization: authState?.token,
        },
        body: JSON.stringify(postId),
      });
      const data = await response.json();
      postDispatch({ type: "DELETED_DATA", payload: data.posts });
    } catch (e) {
      console.log(e.message);
    }
  };

  const getEditPost = async (postId, content) => {
    try {
      const response = await fetch(`/api/posts/edit/${postId}`, {
        method: "POST",
        headers: {
          authorization: authState?.token,
        },
        body: JSON.stringify({ postData: { content: content } }),
      });
      const data = await response.json();

      postDispatch({ type: "EDIT_POST", payload: data.posts });
    } catch (e) {
      console.log(e);
    }
  };

  const addBookMark = async (post) => {
    try {
      const response = await fetch(`/api/users/bookmark/${post._id}/`, {
        method: "POST",
        headers: {
          authorization: authState?.token,
        },
      });
      const data = await response.json();
      console.log("🚀 ~ file: PostContext.jsx:77 ~ addBookMark ~ data:", data);

      postDispatch({ type: "ADD_BOOKMARK", payload: data?.bookmarks });
    } catch (e) {
      console.log(e);
    }
  };

  const removeBookMark = async (post) => {
    try {
      const response = await fetch(`/api/users/remove-bookmark/${post._id}/`, {
        method: "POST",
        headers: {
          authorization: authState?.token,
        },
      });
      const data = await response.json();
      console.log(
        "🚀 ~ file: PostContext.jsx:93 ~ removeBookMark ~ data:",
        data
      );

      postDispatch({ type: "REMOVE_BOOKMARK", payload: data?.bookmarks });
    } catch (e) {
      console.log(e);
    }
  };

  const updateUnlikePost = async (post) => {
    try {
      const response = await fetch(`api/posts/dislike/${post._id}`, {
        method: "POST",
        headers: {
          authorization: authState?.token,
        },
      });
      const data = await response.json();
      postDispatch({ type: "UPDATE_UNLIKE_POST", payload: data.posts });
    } catch (e) {
      console.log(e);
    }
  };
  const updateLikes = async (post) => {
    try {
      const response = await fetch(`api/posts/like/${post._id}`, {
        method: "POST",
        headers: {
          authorization: authState?.token,
        },
      });

      const data = await response.json();

      postDispatch({ type: "UPDATE_LIKE_POST", payload: data.posts });
    } catch (e) {
      console.log(e);
    }
  };
  const getAllBookmarks = async () => {
    try {
      const { data, status } = await axios.get(`api/users/bookmark`, {
        headers: {
          authorization: authState?.token,
        },
      });
      if (status === 200) {
        postDispatch({ type: "SET_ALL_BOOKMARKS", payload: data?.bookmarks });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getSortedPosts = (posts, sortBy) => {
    switch (sortBy.toUpperCase()) {
      case "LATEST":
        return [...posts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "OLDEST":
        return [...posts].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      case "TRENDING":
        return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
      default:
        return [...posts];
    }
  };

  const editUserProfileHandler = async (
    userData,
    encodedToken,
    dataDispatch
  ) => {
    try {
      const { data, status } = await axios.post(
        `/api/users/edit`,
        { userData },
        {
          headers: { authorization: encodedToken },
        }
      );
      if (status === 201 || status === 200) {
        dataDispatch({ type: "EDIT_USER", payload: data?.user });
      }
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong, try again!");
    }
  };
  const unfollowUserHandler = async (
    encodedToken,
    followUserId,
    postDispatch
  ) => {
    try {
      const { data, status } = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      if (status === 200 || status === 201) {
        postDispatch({ type: "UPDATE_USER", payload: data?.followUser });
        postDispatch({ type: "UPDATE_USER", payload: data?.user });
        toast.success(`Unfollowed @${data?.followUser?.username}`);
      }
    } catch (e) {
      console.error(e);
      toast.error(e?.response?.data?.errors[0]);
    }
  };

  const followUserHandler = async (
    encodedToken,
    followUserId,
    postDispatch
  ) => {
    try {
      const { data, status } = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      if (status === 200 || status === 201) {
        postDispatch({ type: "UPDATE_USER", payload: data?.followUser });
        postDispatch({ type: "UPDATE_USER", payload: data?.user });
        toast.success(`Followed @${data?.followUser?.username}`);
      }
    } catch (e) {
      console.error(e);
      toast.error(e?.response?.data?.errors[0]);
    }
  };
  useEffect(() => {
    if (authState?.token) {
      getData();
      getAllUsers();
      getAllBookmarks();
    }
  }, [authState?.token]);

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
        getSortedPosts,
        editUserProfileHandler,
        unfollowUserHandler,
        followUserHandler,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
