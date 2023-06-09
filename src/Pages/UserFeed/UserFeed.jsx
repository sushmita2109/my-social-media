import { useAuth } from "../../context/AuthContext/AuthContext";

export const UserFeed = () => {
  const { loggedIn } = useAuth();

  return <div>{loggedIn && <h1>Feed</h1>}</div>;
};
