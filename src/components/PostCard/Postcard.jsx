import { usePost } from "../../context/PostContext/PostContext";
import { ContextualMenuBar } from "../ContextualMenuBar/ContextualMenuBar";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./PostCard.css";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import { useNavigate, Link } from "react-router-dom";
import { CreatePost } from "../CreatePost/CreatePost";
import Typography from "@mui/material/Typography";
import TuneIcon from "@mui/icons-material/Tune";
import moment from "moment";
import { Box, Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import FixedBottomNavigation from "../FixedBottomNavigation/FixedBottomNavigation";

const ascendingOrder = (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt);

const updateDate = (postDate) => {
  return moment(postDate).format("MMMM  D, YYYY ");
};

export const PostCard = () => {
  const { postStates, postDispatch, getDeletedData, getEditPost } = usePost();
  const userDetail = JSON.parse(localStorage.getItem("user"));
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getData = () => {
    const userfeedPosts = postStates?.allPosts?.posts?.filter(
      (post) => post.username === userDetail.username
    );
    postDispatch({ type: "USER_FEEDS", payload: userfeedPosts });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(postStates.userfeeds);
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CreatePost />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">Latest Post</Typography>
        <Button
          startIcon={<TuneIcon />}
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
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Latest</MenuItem>
          <MenuItem onClick={handleClose}>Oldest</MenuItem>
          <MenuItem onClick={handleClose}>Trending</MenuItem>
        </Menu>
      </Box>

      <List>
        {postStates.userfeeds?.length > 0 &&
          postStates.userfeeds?.sort(ascendingOrder).map((post) => (
            <ListItem key={post._id} sx={{ justifyContent: "center" }}>
              <Card
                sx={{
                  padding: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <AccountCircleIcon
                        onClick={() => navigate(`profile/${post.username}`)}
                        sx={{ fontSize: 50 }}
                      ></AccountCircleIcon>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="body1">{post.firstName}</Typography>
                      <Typography variant="caption">
                        @{post.username}
                      </Typography>
                    </Box>

                    <Box className="username-container">
                      <Typography variant="caption">
                        {" "}
                        {updateDate(post.updatedAt)}
                      </Typography>
                    </Box>
                  </Box>
                  <ContextualMenuBar
                    post={post}
                    getDeletedData={getDeletedData}
                    getEditPost={getEditPost}
                  />
                </Box>

                <Box
                  onClick={() => navigate(`/${post._id}`)}
                  sx={{
                    marginTop: "4px",
                    marginLeft: "4px",
                    width: "500px",
                  }}
                >
                  <Typography sx={{ wordBreak: "break-word" }} variant="body1">
                    {post.content}
                  </Typography>
                </Box>
                <ActionButtons post={post} />
              </Card>
            </ListItem>
          ))}
      </List>
      <FixedBottomNavigation />
    </Box>
  );
};
