import { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import { initialState } from "../../Reducer/AuthReducer/AuthReducer";
import { authReducer } from "../../Reducer/AuthReducer/AuthReducer";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (user, pass, location) => {
    console.log(
      "🚀 ~ file: AuthContext.js:15 ~ handleLogin ~ location:",
      location
    );
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username: user, password: pass }),
      });

      const data = await response.json();
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
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
        password: authState.password,
        username: authState.username,
        authDispatch,
        loggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
