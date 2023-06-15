import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ActionButtons } from "../ActionButtons/ActionButtons";

export const BookMarkCard = ({ bookMark }) => {
  return (
    <div>
      <Card className="post-container">
        <div>
          <AccountCircleIcon></AccountCircleIcon>
          {bookMark.firstName}
          <div className="username-container">
            <p>@{bookMark.username}</p>
            <p> {bookMark.updatedAt.toString().split("T")[0]}</p>
          </div>
        </div>
        <div>
          <p className="post-content">{bookMark.content}</p>
        </div>
        <ActionButtons post={bookMark} />
      </Card>
    </div>
  );
};
