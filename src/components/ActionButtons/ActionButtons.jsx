import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import Badge from "@mui/material/Badge";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./ActionButtons.css";
import { useState } from "react";
import { usePost } from "../../context/PostContext/PostContext";

export const ActionButtons = ({ post }) => {
  const { updateLikes, updateUnlikePost, addBookMark, removeBookMark } =
    usePost();
  const [fav, setFav] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleFav = (like) => {
    if (like === false) {
      setFav(true);

      updateLikes(post);
    }
    if (like === true) {
      setFav(false);

      updateUnlikePost(post);
    }
  };

  const handleSave = (save) => {
    if (save === false) {
      setSaved(true);
      addBookMark(post);
    }
    if (save === true) {
      setSaved(false);
      removeBookMark(post);
    }
  };
  return (
    <div className="buttons-container">
      <IconButton onClick={() => handleFav(fav)}>
        <Badge badgeContent={post.likes.likeCount} sx={{ color: "red" }}>
          {fav ? (
            <FavoriteIcon
              sx={{
                color: "red",
              }}
            />
          ) : (
            <FavoriteBorderIcon
              sx={{
                color: "red",
              }}
            />
          )}
        </Badge>
      </IconButton>
      <IconButton>
        <ChatBubbleOutlineIcon sx={{ color: "black" }} />
      </IconButton>
      <IconButton>
        <ShareIcon />
      </IconButton>
      <IconButton onClick={() => handleSave(saved)}>
        {saved ? (
          <BookmarkIcon sx={{ color: "blueviolet" }} />
        ) : (
          <BookmarkBorderIcon sx={{ color: "blueviolet" }} />
        )}
      </IconButton>
    </div>
  );
};
