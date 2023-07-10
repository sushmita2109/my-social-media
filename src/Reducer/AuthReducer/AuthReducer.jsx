export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "LOGOUT": {
      return { ...state, user: "", token: "" };
    }
    default:
      return state;
  }
};
