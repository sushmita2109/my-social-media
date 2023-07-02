export const initialState = {
  allPosts: [],
  bookMarks: [],
  userfeeds: [],
  followingUser: [],
};
export const postReducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS": {
      return {
        ...state,
        allPosts: action.payload,
      };
    }
    case "GET_BOOKMARK": {
      return {
        ...state,
        bookMarks: action.payload,
      };
    }

    case "DELETED_DATA": {
      return {
        ...state,
        allPosts: action.payload,
      };
    }
    case "USER_FEEDS": {
      return {
        ...state,
        userfeeds: action.payload,
      };
    }
    case "EDIT_POST": {
      return {
        ...state,
        allPosts: action.payload,
      };
    }

    case "USERS_FOLLOWERS": {
      return {
        ...state,
        followingUser: action.payload,
      };
    }
    case "UPDATE_FOLLOWER_LIST": {
      return {
        ...state,
        followingUser: action.payload,
      };
    }
    case "ADD_FOLLOWER_FEED": {
      return {
        ...state,
        userfeeds: [...state.userfeeds, ...action.payload],
      };
    }
    default:
      return state;
  }
};
