import { Avatar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import { Paper } from "@mui/material";

export const SearchedData = ({ filteredData }) => {
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
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={`profile/${data.username}`}
              >
                {data.firstName}
              </Link>
            </Paper>
          ))}
      </Stack>
    </Box>
  );
};
