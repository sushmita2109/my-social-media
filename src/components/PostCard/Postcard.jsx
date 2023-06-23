import { usePost } from "../../context/PostContext/PostContext";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./PostCard.css";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import { useNavigate } from "react-router-dom";
import { CreatePost } from "../CreatePost/CreatePost";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const ascendingOrder = (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt);

const ContextualMenuBar = ({ post, getDeletedData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e, post) => {
    if (e.target.innerText === "Delete") {
      getDeletedData(post._id);
    }
    setAnchorEl(null);
  };

  return (
    <>
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
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={(e) => handleClose(e, post)}>Edit</MenuItem>
        <MenuItem onClick={(e) => handleClose(e, post)}>Delete</MenuItem>
      </Menu>
    </>
  );
};
export const PostCard = () => {
  const { postStates, getDeletedData } = usePost();

  const navigate = useNavigate();

  return (
    <>
      <div>
        <CreatePost />
        <h5>Latest Post</h5>
        {postStates.allPosts.posts.length > 0 &&
          postStates?.allPosts.posts.sort(ascendingOrder).map((post) => (
            <Card key={post._id} className="post-container">
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon></AccountCircleIcon>
                  {post.firstName}
                  <ContextualMenuBar
                    post={post}
                    getDeletedData={getDeletedData}
                  />
                </div>
                <div className="username-container">
                  <p>@{post.username}</p>
                  <p> {post.updatedAt.toString().split("T")[0]}</p>
                </div>
              </div>
              <div onClick={() => navigate(`/${post._id}`)}>
                <p className="post-content">{post.content}</p>
              </div>
              <ActionButtons post={post} />
            </Card>
          ))}
      </div>
    </>
  );
};
