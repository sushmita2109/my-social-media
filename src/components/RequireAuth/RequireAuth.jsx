import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";

export const RequireAuth = ({ children }) => {
  const { authState } = useAuth();

  const location = useLocation();

  return authState.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
