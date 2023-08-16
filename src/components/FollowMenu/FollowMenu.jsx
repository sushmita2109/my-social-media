import { Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Modal, TextField } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { usePost } from "../../context/PostContext/PostContext";

export const FollowMenu = ({ post }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { authState } = useAuth();
  const { unfollowUserHandler, postStates, postDispatch } = usePost();

  const followuser = postStates?.users?.find(
    (user) => user.username === post.username
  );

  const handleCloseModal = (e, followUser) => {
    if (e.target.innerText === "Unfollow") {
      unfollowUserHandler(authState?.token, followuser._id, postDispatch);
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box>
      <Button
        startIcon={<MoreVertIcon />}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      ></Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={(e) => handleCloseModal(e, followuser)}>
          Unfollow
        </MenuItem>
      </Menu>
    </Box>
  );
};
