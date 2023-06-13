import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import Badge from "@mui/material/Badge";
import "./ActionButtons.css";
import { useState } from "react";

export const ActionButtons = () => {
  const [fav, setFav] = useState(false);
  return (
    <div className="buttons-container">
      <IconButton onClick={() => setFav(!fav)}>
        <Badge>
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
        <ChatBubbleOutlineIcon />
      </IconButton>
      <IconButton>
        <ShareIcon />
      </IconButton>
      <IconButton>
        <TurnedInNotIcon />
      </IconButton>
    </div>
  );
};
