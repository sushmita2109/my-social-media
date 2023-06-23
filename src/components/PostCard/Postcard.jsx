import { usePost } from "../../context/PostContext/PostContext";
import { ContextualMenuBar } from "../ContextualMenuBar/ContextualMenuBar";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./PostCard.css";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import { useNavigate } from "react-router-dom";
import { CreatePost } from "../CreatePost/CreatePost";

const ascendingOrder = (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt);

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
