import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ContextualMenuBar } from "../ContextualMenuBar/ContextualMenuBar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import { usePost } from "../../context/PostContext/PostContext";

export const Profilefeed = ({ userPosts }) => {
  const { getDeletedData, getEditPost } = usePost();
  const navigate = useNavigate();
  const updateDate = (postDate) => {
    return moment(postDate).format("MMMM  D, YYYY ");
  };
  return (
    <Box>
      <List>
        {userPosts?.map((post) => (
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
                    <Avatar alt="Remy Sharp" src={post.profile_pic} />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body1">{post.firstName}</Typography>
                    <Typography variant="caption">@{post.username}</Typography>
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
    </Box>
  );
};
