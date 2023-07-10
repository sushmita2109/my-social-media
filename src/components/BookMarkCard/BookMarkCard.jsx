import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { Box, Button } from "@mui/material";
import { usePost } from "../../context/PostContext/PostContext";
import { ContextualMenuBar } from "../ContextualMenuBar/ContextualMenuBar";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { FollowMenu } from "../FollowMenu/FollowMenu";

export const BookMarkCard = ({ bookMark }) => {
  const { getDeletedData, getEditPost } = usePost();
  const { authState } = useAuth();
  return (
    <ListItem sx={{ justifyContent: "center" }}>
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
          <Box sx={{ display: "flex" }}>
            <AccountCircleIcon sx={{ fontSize: 50 }}></AccountCircleIcon>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1">{bookMark.firstName}</Typography>
              <Typography variant="caption">@{bookMark.username}</Typography>
            </Box>
          </Box>
          {authState.user.username === bookMark.username ? (
            <ContextualMenuBar
              post={bookMark}
              getDeletedData={getDeletedData}
              getEditPost={getEditPost}
            />
          ) : (
            <FollowMenu post={bookMark} />
          )}
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
