import { Avatar, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { Paper } from "@mui/material";

export const SearchedData = ({ filteredData }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Stack
        sx={{
          overflow: "auto",
          maxHeight: 500,
        }}
      >
        {filteredData &&
          filteredData?.map((data) => (
            <Paper>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "2px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => navigate(`profile/${data.username}`)}
              >
                <Avatar src={data.profile_pic} alt="imageprofile" />
                {data.firstName}
              </Typography>
            </Paper>
          ))}
      </Stack>
    </Box>
  );
};
