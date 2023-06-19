import { PostCard } from "../../components/PostCard/Postcard";
import { useAuth } from "../../context/AuthContext/AuthContext";
import "./UserFeed.css";
import { SideBar } from "../../components/SideBar/SideBar";
import { FollowerFriend } from "../../components/FollowerFriend/FollowerFriend";

export const UserFeed = () => {
  const { loggedIn } = useAuth();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      {loggedIn && (
        <div>
          <div className="postCard-container">
            <PostCard />
          </div>
        </div>
      )}
      <FollowerFriend />
    </div>
  );
};
