import { usePost } from "../../context/PostContext/PostContext";
import { ContextualMenuBar } from "../ContextualMenuBar/ContextualMenuBar";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import "./PostCard.css";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import { useNavigate } from "react-router-dom";
import { CreatePost } from "../CreatePost/CreatePost";
import Typography from "@mui/material/Typography";
import TuneIcon from "@mui/icons-material/Tune";
import moment from "moment";
import { Box, Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import FixedBottomNavigation from "../FixedBottomNavigation/FixedBottomNavigation";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { FollowMenu } from "../FollowMenu/FollowMenu";

const updateDate = (postDate) => {
  return moment(postDate).format("MMMM  D, YYYY ");
};

export const PostCard = () => {
  const { postStates, getDeletedData, getEditPost, getSortedPosts } = usePost();
  console.log(
    "🚀 ~ file: Postcard.jsx:28 ~ PostCard ~ postStates:",
    postStates?.allPosts
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const { authState } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const loggedInUser = postStates?.users?.find(
    ({ username }) => username === authState?.user?.username
  );

  const postsOfFollowed = postStates?.allPosts?.filter(
    (post) =>
      loggedInUser?.following?.some(
        ({ username }) => username === post.username
      ) || authState?.user?.username === post.username
  );
  console.log(
    "🚀 ~ file: Postcard.jsx:51 ~ PostCard ~ postsOfFollowed:",
    postsOfFollowed
  );
  const getuser = (clickedUserName) => {
    const filterUser = postStates?.users?.find(
      (user) => user.username.toLowerCase() === clickedUserName.toLowerCase()
    );
    if (filterUser) {
      return filterUser;
    }
  };

  const [sortByOption, setSortByOption] = useState("Latest");

  const sortedPosts = getSortedPosts(postsOfFollowed, sortByOption);
  console.log(
    "🚀 ~ file: Postcard.jsx:63 ~ PostCard ~ sortedPosts:",
    sortedPosts
  );

  const handleMenu = (e) => {
    setSortByOption(e.target.innerText);
    handleClose();
  };

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
          <MenuItem value="LATEST" onClick={(e) => handleMenu(e)}>
            LATEST
          </MenuItem>
          <MenuItem value="OLDEST" onClick={(e) => handleMenu(e)}>
            OLDEST
          </MenuItem>
          <MenuItem value="TRENDING" onClick={(e) => handleMenu(e)}>
            TRENDING
          </MenuItem>
        </Menu>
      </Box>

      <List>
        {sortedPosts?.length > 0 &&
          sortedPosts?.map((post) => (
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
                      <Avatar
                        alt="Remy Sharp"
                        src={getuser(post.username).profile_pic}
                        onClick={() => navigate(`profile/${post.username}`)}
                        sx={{ fontSize: 50 }}
                      />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="body1">
                        {getuser(post.username).firstName}
                      </Typography>
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
                  {authState?.user?.username == post?.username ? (
                    <ContextualMenuBar
                      post={post}
                      getDeletedData={getDeletedData}
                      getEditPost={getEditPost}
                    />
                  ) : (
                    <FollowMenu post={post} />
                  )}
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
