import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { usePost } from "../../context/PostContext/PostContext";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useEffect } from "react";
import "./FollowerFriend.css";

export const FollowerFriend = () => {
  const { postDispatch, postStates } = usePost();
  const { loggedIn } = useAuth();
  const userDetail = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const followUser = async (user) => {
    try {
      const response = await fetch(`/api/users/follow/${user._id}/`, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();

      const filteredUsers = postStates?.followingUser?.filter(
        (user) => user.username !== data.followUser.username
      );
      const filterPost = postStates?.allPosts?.posts?.filter(
        (post) => post.username === data.followUser.username
      );

      postDispatch({ type: "UPDATE_FOLLOWER_LIST", payload: filteredUsers });
      postDispatch({ type: "ADD_FOLLOWER_FEED", payload: filterPost });
    } catch (e) {
      console.log(e);
    }
  };

  const getUsers = async () => {
    try {
      if (loggedIn) {
        const response = await fetch("/api/users");
        const data = await response.json();
        const filteredUsers = data?.users?.filter(
          (user) => user.username !== userDetail.username
        );

        postDispatch({ type: "USERS_FOLLOWERS", payload: filteredUsers });
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Card sx={{ width: "300px" }}>
        <Typography variant="h6">Suggested Users</Typography>

        <div>
          {postStates?.followingUser?.map((user) => (
            <Card
              key={user._id}
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "12px",
                padding: "5px",
              }}
            >
              <div className="username-cont">
                <div className="username">
                  <AccountCircleIcon></AccountCircleIcon>
                  {user.firstName}
                </div>
                <p>@{user.username}</p>
              </div>
              <Button
                variant="contained"
                onClick={() => followUser(user)}
                sx={{
                  //   backgroundColor: "#dabdff",
                  //   pointerEvents: "none",
                  height: "45px",
                  marginTop: "5px",
                }}
              >
                Follow
              </Button>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};
