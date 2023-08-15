import { Box, Button } from "@mui/material";
import { usePost } from "../../context/PostContext/PostContext";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { DefaultLayout } from "../../Pages/DefaultLayout/DefaultLayout";
import { Profilefeed } from "../ProfileFeed/ProfileFeed";
import { useState } from "react";
import { EditProfile } from "../EditProfile/EditProfile";

export const ProfileUserDetail = ({ profileUser }) => {
  const { postStates } = usePost();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                  <Avatar alt="Remy Sharp" src={profile.profile_pic} />
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
              <Button onClick={() => handleOpen()}>Edit Profile</Button>
            </Box>
            <EditProfile
              open={open}
              onClose={() => handleClose()}
              profileUser={profile}
            />
          </Card>
        ))}
        <Profilefeed userPosts={userPosts} />
      </DefaultLayout>
    </div>
  );
};
