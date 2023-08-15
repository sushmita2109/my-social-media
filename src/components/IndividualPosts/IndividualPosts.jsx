import { useParams } from "react-router-dom";
import { usePost } from "../../context/PostContext/PostContext";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import { DefaultLayout } from "../../Pages/DefaultLayout/DefaultLayout";

export const IndividualPosts = () => {
  const { postId } = useParams();

  const { postStates } = usePost();

  const selectedPost = postStates?.allPosts?.find((post) => post._id == postId);

  return (
    <DefaultLayout>
      <div>
        <Card key={selectedPost?._id} className="post-container">
          <div>
            <Avatar alt="Remy Sharp" src={selectedPost.profile_pic} />
            {selectedPost?.firstName}
            <div className="username-container">
              <p>@{selectedPost?.username}</p>
              <p> {selectedPost?.updatedAt.toString().split("T")[0]}</p>
            </div>
          </div>
          <div>
            <p className="post-content">{selectedPost?.content}</p>
          </div>
          <ActionButtons post={selectedPost} />
        </Card>
      </div>
    </DefaultLayout>
  );
};
