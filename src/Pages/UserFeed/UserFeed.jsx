import { PostCard } from "../../components/PostCard/Postcard";
import { useAuth } from "../../context/AuthContext/AuthContext";
import "./UserFeed.css";

export const UserFeed = () => {
  const { loggedIn } = useAuth();

  return (
    <div>
      {loggedIn && (
        <div>
          <div className="postCard-container">
            <PostCard />
          </div>
        </div>
      )}
    </div>
  );
};
