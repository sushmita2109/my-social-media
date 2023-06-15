import { useEffect } from "react";
import { usePost } from "../../context/PostContext/PostContext";
import { BookMarkCard } from "../BookMarkCard/BookMarkCard";

const token = localStorage.getItem("token");

export const Bookmark = () => {
  const { postDispatch, postStates } = usePost();
  console.log("🚀 ~ file: Bookmark.jsx:7 ~ Bookmark ~ postStates:", postStates);

  const getBookmarks = async () => {
    try {
      const response = await fetch("/api/users/bookmark", {
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      console.log("🚀 ~ file: Bookmark.jsx:19 ~ getBookmarks ~ data:", data);
      postDispatch({ type: "GET_BOOKMARK", payload: data });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getBookmarks();
  }, []);
  return (
    <div className="bookmark-container">
      <h4>Bookmark</h4>
      {postStates?.bookMarks?.bookmarks?.map((bookMark) => (
        <div key={bookMark._id}>
          <BookMarkCard bookMark={bookMark} />
        </div>
      ))}
    </div>
  );
};
