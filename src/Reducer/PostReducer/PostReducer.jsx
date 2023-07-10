export const initialState = {
  allPosts: [],
  bookMarks: [],
  users: [],
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
    case "CREATE_NEW_POST":
      return {
        ...state,
        allposts: action.payload,
      };
    case "UPDATE_LIKE_POST": {
      return {
        ...state,
        allPosts: action.payload,
      };
    }
    case "UPDATE_UNLIKE_POST": {
      return {
        ...state,
        allPosts: action.payload,
      };
    }
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };

    case "ADD_BOOKMARK": {
      return {
        ...state,
        bookMarks: action.payload,
      };
    }
    case "REMOVE_BOOKMARK": {
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
    case "SET_ALL_USERS": {
      return {
        ...state,
        users: action.payload,
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
