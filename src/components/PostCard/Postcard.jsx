import { usePost } from "../../context/PostContext/PostContext";

export const PostCard = () => {
  const { postStates } = usePost();
  console.log("🚀 ~ file: Postcard.jsx:5 ~ PostCard ~ postStates:", postStates);
  return (
    <>
      <h1>Card</h1>
      {postStates.allPosts.posts.length > 0 &&
        postStates?.allPosts.posts.map((post) => (
          <p key={post._id}>{post.content}</p>
        ))}
    </>
  );
};
