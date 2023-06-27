import { useEffect } from "react";
import { usePost } from "../../context/PostContext/PostContext";
import { BookMarkCard } from "../BookMarkCard/BookMarkCard";
import { DefaultLayout } from "../../Pages/DefaultLayout/DefaultLayout";
import List from "@mui/material/List";

const token = localStorage.getItem("token");

export const Bookmark = () => {
  const { postDispatch, postStates } = usePost();

  const getBookmarks = async () => {
    try {
      const response = await fetch("/api/users/bookmark", {
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();

      postDispatch({ type: "GET_BOOKMARK", payload: data });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <DefaultLayout>
      <List className="bookmark-container">
        <h4>Bookmark</h4>
        {postStates?.bookMarks?.bookmarks?.map((bookMark) => (
          <div key={bookMark._id}>
            <BookMarkCard bookMark={bookMark} />
          </div>
        ))}
      </List>
    </DefaultLayout>
  );
};
