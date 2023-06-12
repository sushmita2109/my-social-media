import { PostCard } from "../../components/PostCard/Postcard";
import { useAuth } from "../../context/AuthContext/AuthContext";

export const UserFeed = () => {
  const { loggedIn } = useAuth();

  return (
    <div>
      {loggedIn && (
        <div>
          {" "}
          <PostCard />
        </div>
      )}
    </div>
  );
};
