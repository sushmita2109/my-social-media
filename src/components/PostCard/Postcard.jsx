import { usePost } from "../../context/PostContext/PostContext";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./PostCard.css";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import { useNavigate } from "react-router-dom";

export const PostCard = () => {
  const { postStates } = usePost();
  const navigate = useNavigate();

  return (
    <>
      <h1>Card</h1>
      {postStates.allPosts.posts.length > 0 &&
        postStates?.allPosts.posts.map((post) => (
          <Card key={post._id} className="post-container">
            <div>
              <AccountCircleIcon></AccountCircleIcon>
              {post.firstName}
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
    </>
  );
};
