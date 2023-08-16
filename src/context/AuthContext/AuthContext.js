import { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { authReducer } from "../../Reducer/AuthReducer/AuthReducer";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const localStorageData = JSON.parse(localStorage.getItem("data"));

  const initialState = {
    user: localStorageData?.user || {},
    token: localStorageData?.token || "",
  };
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (loginData) => {
    try {
      const { status, data } = await axios.post("/api/auth/login", loginData);

      if (status === 200) {
        localStorage.setItem(
          "data",
          JSON.stringify({ user: data?.foundUser, token: data?.encodedToken })
        );

        authDispatch({ type: "SET_USER", payload: data?.foundUser });
        authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken });
        toast.success("Login Successful!");
        navigate(location?.state?.from?.pathname || "/");
      }
    } catch (e) {
      console.error(e);
      toast.error(e.response.data.errors[0]);
    }
  };

  const userSignup = async (signupData) => {
    try {
      const { firstName, lastName, username, email, password } = signupData;
      const { status, data } = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
        username,
        email,
        password,

        profile_pic:
          "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179151/avatars/young-woman-white_25030-39552_l54dms.avif",
        bio: "Aspiring Frontend Devloper",
      });
      if (status === 201) {
        localStorage.setItem(
          "data",
          JSON.stringify({ user: data?.createdUser, token: data?.encodedToken })
        );
        authDispatch({ type: "SET_USER", payload: data?.createdUser });
        authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken });
        toast.success("Signup Successful!");
        navigate(location?.state?.from?.pathname || "/");
      }
    } catch (e) {
      console.error(e);
      toast.error(e.response.data.errors[0]);
    }
  };

  const handlelogout = () => {
    localStorage.removeItem("data");
    authDispatch({ type: "LOGOUT" });
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
        userSignup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
