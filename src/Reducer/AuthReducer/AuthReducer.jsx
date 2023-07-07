export const initialState = {
  user: {},
  following: {},
  username: "",
  password: "",
};

export const authReducer = (action, state) => {
  switch (action.type) {
    case "USER_DETAIL": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "FOLLOWER_ADDED": {
      return {
        ...state,
        following: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
