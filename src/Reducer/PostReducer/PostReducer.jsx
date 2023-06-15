export const initialState = {
  allPosts: [],
  bookMarks: [],
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

    default:
      return state;
  }
};
