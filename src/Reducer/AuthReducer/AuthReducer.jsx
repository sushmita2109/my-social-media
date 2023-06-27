export const initialState = {
  user: {},
  following: {},
};

export const authReducer = (action, state) => {
  switch (action.type) {
    case "USER_DETAIL": {
      return {
        ...state,
        user: action.payload,
      };
    }
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
