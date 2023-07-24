import { Box, Button, Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import ImageIcon from "@mui/icons-material/Image";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useState } from "react";
import { usePost } from "../../context/PostContext/PostContext";

export const CreatePost = ({ handleClose }) => {
  const [newPost, setNewPost] = useState("");
  const token = localStorage.getItem("token");
  const { postDispatch } = usePost();

  const addPost = async () => {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ postData: { content: newPost } }),
      });
      const data = await response.json();
      console.log("🚀 ~ file: CreatePost.jsx:25 ~ addPost ~ data:", data);

      postDispatch({ type: "CREATE_NEW_POST", payload: data.posts });
      setNewPost(" ");
    } catch (e) {
      console.log(e);
    }
    if (handleClose) {
      handleClose();
    }
  };

  const setInputHandler = (e) => {
    const inputValue = e.target.value.slice(0, 256);
    setNewPost(inputValue);
  };

  return (
    <Card>
      <FormControl sx={{ m: 1, width: "55ch" }}>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          value={newPost}
          placeholder="Enter the Post"
          onChange={(e) => setInputHandler(e)}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
            marginTop: 1,
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <ImageIcon />
            <InsertEmoticonIcon />
          </Stack>
          <Button onClick={() => addPost()}>Post</Button>
        </Box>
      </FormControl>
    </Card>
  );
};
