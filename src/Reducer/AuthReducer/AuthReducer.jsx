export const initialState = {
  user: {},
  email: "",
  username: "",
  password: "",
};

export const authReducer = (action, state) => {
  switch (action.type) {
    case "ADD_USERNAME": {
      return {
        ...state,
        username: action.payload,
      };
    }
    case "ADD_PASSWORD": {
      return {
        ...state,
        password: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
