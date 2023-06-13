export const initialState = {
  allPosts: [],
};
export const postReducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS": {
      return {
        ...state,
        allPosts: action.payload,
      };
    }
    default:
      return state;
  }
};
