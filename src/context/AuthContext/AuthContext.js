import { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import { initialState } from "../../Reducer/AuthReducer/AuthReducer";
import { authReducer } from "../../Reducer/AuthReducer/AuthReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const userDetail = localStorage.getItem("user");

  const handleLogin = async (user, pass) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username: user, password: pass }),
      });

      const data = await response.json();

      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      authDispatch({ type: "USER_DETAIL", payload: userDetail });
      setLoggedIn(true);
      navigate("/home");
      toast.success("Logged In Successfully");
    } catch (e) {
      console.log("🚀 ~ file: AuthContext.js:20 ~ handleLogin ~ e:", e);
    }
  };

  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        authState,
        authDispatch,
        loggedIn,
        handlelogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
