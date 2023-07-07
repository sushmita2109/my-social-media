import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";

export const RequireAuth = ({ children }) => {
  const { loggedIn } = useAuth();
  console.log(
    "🚀 ~ file: RequireAuth.jsx:6 ~ RequireAuth ~ loggedIn:",
    loggedIn
  );

  const location = useLocation();

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};
