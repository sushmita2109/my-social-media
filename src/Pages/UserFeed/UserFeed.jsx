import { PostCard } from "../../components/PostCard/Postcard";
import { useAuth } from "../../context/AuthContext/AuthContext";
import "./UserFeed.css";

import { IconButton } from "@mui/material";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { useNavigate } from "react-router-dom";

export const UserFeed = () => {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      {loggedIn && (
        <div>
          <IconButton onClick={() => navigate("/bookmark")}>
            <BookmarksIcon />
          </IconButton>
          <div className="postCard-container">
            <PostCard />
          </div>
        </div>
      )}
    </div>
  );
};
