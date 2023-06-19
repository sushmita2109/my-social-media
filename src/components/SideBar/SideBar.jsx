import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExploreIcon from "@mui/icons-material/Explore";
import { useNavigate } from "react-router-dom";
import { Modal, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { CreatePost } from "../CreatePost/CreatePost";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const SideBar = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          width: "250px",
          padding: "5px",
        }}
      >
        <IconButton onClick={() => navigate("/")}>
          <HomeIcon />
          Home
        </IconButton>
        <IconButton>
          <ExploreIcon />
          Explore
        </IconButton>
        <IconButton onClick={() => navigate("/bookmark")}>
          <BookmarksIcon />
          Bookmark
        </IconButton>
        <IconButton>
          <LogoutIcon />
          Logout
        </IconButton>
        <IconButton
          sx={{
            border: "1px solid",
            borderRadius: "5px",
          }}
          onClick={handleOpen}
        >
          <AddCircleOutlineIcon />
          Post
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CreatePost handleClose={handleClose} />
          </Box>
        </Modal>
      </Card>
    </>
  );
};
