import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { Box, Button } from "@mui/material";

export const BookMarkCard = ({ bookMark }) => {
  return (
    <ListItem>
      <Card>
        <Box sx={{ display: "flex" }}>
          <AccountCircleIcon sx={{ fontSize: 50 }}></AccountCircleIcon>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body1">{bookMark.firstName}</Typography>
          <Typography variant="caption">@{bookMark.username}</Typography>
        </Box>
        <CardContent>
          <Typography>{bookMark.content}</Typography>
        </CardContent>
        <CardActions>
          <ActionButtons post={bookMark} />
        </CardActions>
      </Card>
    </ListItem>
  );
};
