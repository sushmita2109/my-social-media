import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { usePost } from "../../context/PostContext/PostContext";
import { ProfileUserDetail } from "../../components/ProfileUserDetail/ProfileUserDetail";

export const Profile = () => {
  const { userName } = useParams();
  const { postStates } = usePost();
  const profileUser = postStates?.users?.filter(
    ({ username }) => username === userName
  );

  return (
    <Box>
      <ProfileUserDetail profileUser={profileUser} />
    </Box>
  );
};
