import { useParams } from "react-router-dom";
import { usePost } from "../../context/PostContext/PostContext";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import { DefaultLayout } from "../../Pages/DefaultLayout/DefaultLayout";

export const IndividualPosts = () => {
  const { postId } = useParams();

  const { postStates } = usePost();

  const selectedPost = postStates?.allPosts?.posts?.find(
    (post) => post._id === postId
  );

  return (
    <DefaultLayout>
      <div>
        <Card key={selectedPost._id} className="post-container">
          <div>
            <AccountCircleIcon></AccountCircleIcon>
            {selectedPost.firstName}
            <div className="username-container">
              <p>@{selectedPost.username}</p>
              <p> {selectedPost.updatedAt.toString().split("T")[0]}</p>
            </div>
          </div>
          <div>
            <p className="post-content">{selectedPost.content}</p>
          </div>
          <ActionButtons post={selectedPost} />
        </Card>
      </div>
    </DefaultLayout>
  );
};
