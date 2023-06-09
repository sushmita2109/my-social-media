import { Box, Button } from "@mui/material";
import { usePost } from "../../context/PostContext/PostContext";

import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { DefaultLayout } from "../../Pages/DefaultLayout/DefaultLayout";
import { Profilefeed } from "../ProfileFeed/ProfileFeed";

export const ProfileUserDetail = ({ profileUser }) => {
  const { postStates } = usePost();

  const userPosts = postStates?.allPosts?.filter(
    (post) => post.username === profileUser[0].username
  );

  const updateDate = (postDate) => {
    return moment(postDate).format("MMMM  D, YYYY ");
  };
  return (
    <div>
      <DefaultLayout>
        {profileUser?.map((profile) => (
          <Card key={profile._id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <AccountCircleIcon sx={{ fontSize: 50 }}></AccountCircleIcon>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body1">{profile.firstName}</Typography>
                  <Typography variant="caption">@{profile.username}</Typography>
                </Box>
                <Typography variant="body1">Bio:{profile.bio}</Typography>
                <Box className="username-container">
                  <Typography variant="caption">
                    {" "}
                    Joined On:
                    {updateDate(profile.updatedAt)}
                  </Typography>
                </Box>
              </Box>
              <Button>Edit Profile</Button>
            </Box>
          </Card>
        ))}
        <Profilefeed userPosts={userPosts} />
      </DefaultLayout>
    </div>
  );
};
