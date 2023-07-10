import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExploreIcon from "@mui/icons-material/Explore";
import { useNavigate } from "react-router-dom";
import { Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import { CreatePost } from "../CreatePost/CreatePost";
import { useAuth } from "../../context/AuthContext/AuthContext";

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
  const { handlelogout } = useAuth();

  const buttonDetails = [
    {
      name: "Home",
      icon: <HomeIcon />,
      routePath: "/",
    },
    {
      name: "Explore",
      icon: <ExploreIcon />,
      routePath: "/explore",
    },
    {
      name: "Bookmark",
      icon: <BookmarksIcon />,
      routePath: "/bookmark",
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      routePath: "/",
    },
  ];

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
        {buttonDetails.map((item, idx) => (
          <Button
            key={idx}
            onClick={() =>
              item.routePath === "/login"
                ? handlelogout
                : navigate(item.routePath)
            }
            startIcon={item.icon}
          >
            {item.name}
          </Button>
        ))}

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
