import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";

export const RequireAuth = ({ children }) => {
  const { loggedIn } = useAuth();

  const location = useLocation();

  return loggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
