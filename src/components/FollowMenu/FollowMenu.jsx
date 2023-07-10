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
  const [openModal, setOpenModal] = useState(false);
  const { authState } = useAuth();
  const { unfollowUserHandler, postStates, postDispatch } = usePost();

  const followuser = postStates?.users?.filter(
    (user) => user.username === post.username
  );

  const isFollowed = (users, userId) => {
    const localStorageData = JSON.parse(localStorage.getItem("data"));
    return users
      ?.find(({ _id }) => _id === localStorageData?.user?._id)
      ?.following?.find(({ _id }) => _id === userId)
      ? true
      : false;
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
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
        <MenuItem
          onClick={() => {
            if (isFollowed(postStates?.users, followuser._id)) {
              unfollowUserHandler(
                authState?.token,
                followuser?._id,
                postDispatch
              );
            }
          }}
        >
          Unfollow
        </MenuItem>
      </Menu>
    </Box>
  );
};
