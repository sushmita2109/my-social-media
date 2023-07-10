import { PostCard } from "../../components/PostCard/Postcard";
import { useAuth } from "../../context/AuthContext/AuthContext";
import "./UserFeed.css";
import { SideBar } from "../../components/SideBar/SideBar";
import { FollowerFriend } from "../../components/FollowerFriend/FollowerFriend";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";

export const UserFeed = () => {
  const { authState } = useAuth();

  return (
    <DefaultLayout>
      {authState?.token && (
        <div>
          <div className="postCard-container">
            <PostCard />
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};
