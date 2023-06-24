export const initialState = {
  user: {},
  email: "",
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
    default: {
      return state;
    }
  }
};
