import { useEffect } from "react";
import { usePost } from "../../context/PostContext/PostContext";
import { BookMarkCard } from "../BookMarkCard/BookMarkCard";
import { DefaultLayout } from "../../Pages/DefaultLayout/DefaultLayout";
import List from "@mui/material/List";
import { Typography } from "@mui/material";

const token = localStorage.getItem("token");

export const Bookmark = () => {
  const { postStates } = usePost();

  const bookMarkPosts = postStates?.allPosts?.filter((post) =>
    postStates?.bookMarks?.includes(post._id)
  );

  return (
    <DefaultLayout>
      <List className="bookmark-container">
        {bookMarkPosts.length <= 0 ? (
          <Typography>No BookMark Done</Typography>
        ) : (
          bookMarkPosts.map((bookmark) => (
            <BookMarkCard key={bookmark._id} bookMark={bookmark} />
          ))
        )}
      </List>
    </DefaultLayout>
  );
};
