import { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import { initialState } from "../../Reducer/AuthReducer/AuthReducer";
import { authReducer } from "../../Reducer/AuthReducer/AuthReducer";
import { useNavigate } from "react-router-dom";
import { usePost } from "../PostContext/PostContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const userDetail = localStorage.getItem("user");

  const handleLogin = async (user, pass, location) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username: user, password: pass }),
      });

      const data = await response.json();

      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      authDispatch({ type: "USER_DETAIL", payload: data.foundUser });
      setLoggedIn(true);
      navigate(location);
    } catch (e) {
      console.log("🚀 ~ file: AuthContext.js:20 ~ handleLogin ~ e:", e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        authState,
        authDispatch,
        loggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
