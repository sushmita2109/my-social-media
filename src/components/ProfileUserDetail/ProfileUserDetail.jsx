import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { DefaultLayout } from "../../Pages/DefaultLayout/DefaultLayout";
export const ProfileUserDetail = () => {
  return (
    <DefaultLayout>
      <Card sx={{ width: "500px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",

            gap: "4px",
          }}
        >
          <Box>
            <AccountCircleIcon sx={{ fontSize: 50 }}></AccountCircleIcon>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body1">Addarsh</Typography>
            <Typography variant="caption">@addarshbalika</Typography>
          </Box>
          <Box className="username-container">
            <Typography variant="caption">3rd July 2023</Typography>
          </Box>
        </Box>
      </Card>
    </DefaultLayout>
  );
};
