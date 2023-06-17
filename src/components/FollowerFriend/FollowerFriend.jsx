import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { usePost } from "../../context/PostContext/PostContext";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useEffect } from "react";

export const FollowerFriend = () => {
  const { postDispatch, postStates } = usePost();
  const { loggedIn } = useAuth();

  const getUsers = async () => {
    try {
      if (loggedIn) {
        const response = await fetch("/api/users");
        const data = await response.json();
        console.log(
          "🚀 ~ file: FollowerFriend.jsx:17 ~ getUsers ~ data:",
          data
        );
        postDispatch({ type: "USERS_DETAILS", payload: data.users });
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
      <Card>
        <Typography variant="h6">Suggested Users</Typography>

        <div>
          {postStates?.users?.map((user) => (
            <div key={user._id}>
              <AccountCircleIcon></AccountCircleIcon>
              {user.firstName}
              <div className="username-container">
                <p>@{user.username}</p>
              </div>
              <Button>Follow</Button>{" "}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
