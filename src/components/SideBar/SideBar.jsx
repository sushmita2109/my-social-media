import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";

export const SideBar = (props) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          width: "250px",
        }}
      >
        <IconButton>Home</IconButton>
        <IconButton>Explore</IconButton>
        <IconButton>Likes</IconButton>
        <IconButton>Bookmark</IconButton>
        <IconButton>Logout</IconButton>
        <IconButton>Post</IconButton>
      </Card>
    </>
  );
};
