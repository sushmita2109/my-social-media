import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExploreIcon from "@mui/icons-material/Explore";
import { useNavigate } from "react-router-dom";

export const SideBar = (props) => {
  const navigate = useNavigate();
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
            backgroundColor: "#dabdff",
            border: "1px solid",
            pointerEvents: "none",
            borderRadius: "5px",
          }}
        >
          <AddCircleOutlineIcon />
          Post
        </IconButton>
      </Card>
    </>
  );
};
