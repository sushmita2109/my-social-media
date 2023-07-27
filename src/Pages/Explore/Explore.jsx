import { Button, Card } from "@mui/material";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { usePost } from "../../context/PostContext/PostContext";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { ActionButtons } from "../../components/ActionButtons/ActionButtons";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import moment from "moment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";

const updateDate = (postDate) => {
  return moment(postDate).format("MMMM  D, YYYY ");
};

const UserInfoHeader = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <div style={{ display: "flex" }}>
            <Avatar alt="Remy Sharp" src={data.profile_pic} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body1">{data.firstName}</Typography>
            <Typography variant="caption">@{data.username}</Typography>
          </div>

          <div className="username-container">
            <Typography variant="caption">
              {" "}
              {updateDate(data.updatedAt)}
            </Typography>
          </div>
        </div>
        <div>
          <Button
            startIcon={<MoreHorizIcon />}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          ></Button>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>+Follow</MenuItem>
        </Menu>
      </div>
    </>
  );
};

export const Explore = () => {
  const { postStates } = usePost();
  const { authState } = useAuth();

  const exploreData = postStates?.allPosts?.filter(
    ({ username }) => username !== authState?.user?.username
  );

  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <List>
          {exploreData?.map((data) => (
            <ListItem key={data._id}>
              <Card sx={{ width: 500 }}>
                <UserInfoHeader data={data} />
                <CardContent onClick={() => navigate(`/${data._id}`)}>
                  <Typography>{data.content}</Typography>
                </CardContent>
                <CardActions>
                  <ActionButtons post={data} />
                </CardActions>
              </Card>
            </ListItem>
          ))}
        </List>
      </div>
    </DefaultLayout>
  );
};
