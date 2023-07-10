import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { usePost } from "../../context/PostContext/PostContext";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useEffect } from "react";
import "./FollowerFriend.css";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const FollowerFriend = () => {
  const { postDispatch, postStates, unfollowUserHandler, followUserHandler } =
    usePost();
  const { authState } = useAuth();
  const navigate = useNavigate();

  const userData = postStates?.users?.find(
    (user) => user.username === authState?.user?.username
  );

  const suggestedUsers = postStates?.users
    ?.filter((user) => user.username !== userData?.username)
    ?.filter(
      (eachUser) =>
        !userData?.following?.find(
          (data) => data.username === eachUser.username
        )
    );
  const isFollowed = (users, userId) => {
    const localStorageData = JSON.parse(localStorage.getItem("data"));
    return users
      ?.find(({ _id }) => _id === localStorageData?.user?._id)
      ?.following?.find(({ _id }) => _id === userId)
      ? true
      : false;
  };
  return (
    <Box>
      {suggestedUsers?.length > 0 ? (
        suggestedUsers
          ?.splice(0, 3)
          ?.map(({ _id, firstName, lastName, username, profileAvatar }) => {
            return (
              <li key={_id} className="suggested-user">
                <div
                  className="suggested-user-name-profile"
                  onClick={() => {
                    navigate(`/profile/${username}`);
                  }}
                >
                  <AccountCircleIcon sx={{ fontSize: 50 }}></AccountCircleIcon>
                  <div className="suggestedUser-name">
                    <span>
                      {firstName} {lastName}
                    </span>
                    <small>@{username}</small>
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (authState?.token) {
                      if (isFollowed(postStates?.users, _id)) {
                        unfollowUserHandler(
                          authState?.token,
                          _id,
                          postDispatch
                        );
                      } else {
                        followUserHandler(authState?.token, _id, postDispatch);
                      }
                    } else {
                      toast.error("Please login to follow");
                      navigate("/login");
                    }
                  }}
                >
                  {isFollowed(postStates?.users, _id) ? "Following" : "Follow"}
                </button>
              </li>
            );
          })
      ) : (
        <p>No suggested user is present.</p>
      )}
    </Box>
  );
};
