import { useContext, useReducer } from "react";
import { createContext } from "react";
import { initialState } from "../../Reducer/AuthReducer/AuthReducer";
import { authReducer } from "../../Reducer/AuthReducer/AuthReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  const handleLogin = async (user, pass) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username: user, password: pass }),
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        password: authState.password,
        username: authState.username,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
