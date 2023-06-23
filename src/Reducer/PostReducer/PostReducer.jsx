export const initialState = {
  allPosts: [],
  bookMarks: [],
  users: [],
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
    case "USERS_DETAILS": {
      return {
        ...state,
        users: action.payload,
      };
    }
    case "DELETED_DATA": {
      return {
        ...state,
        allPosts: action.payload,
      };
    }

    default:
      return state;
  }
};
