import Box from "@mui/material/Box";
import { ProfileUserDetail } from "../../components/ProfileUserDetail/ProfileUserDetail";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const { userName } = useParams();
  console.log("🚀 ~ file: Profile.jsx:7 ~ Profile ~ userName:", userName);
  return (
    <Box sx={{ alignItems: "center", justifyContent: "center" }}>
      <ProfileUserDetail userName={userName} />
    </Box>
  );
};
