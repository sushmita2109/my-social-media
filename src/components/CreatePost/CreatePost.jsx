import { Button, Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import ImageIcon from "@mui/icons-material/Image";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useEffect, useState } from "react";
import { usePost } from "../../context/PostContext/PostContext";

export const CreatePost = () => {
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
        body: JSON.stringify({ postData: newPost }),
      });
      const data = await response.json();
      postDispatch({ type: "GET_POSTS", payload: data });
      setNewPost(" ");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Card>
        <FormControl sx={{ m: 1, width: "55ch" }}>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            value={newPost}
            placeholder="Enter the Post"
            onChange={(e) => setNewPost(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-between",
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
          </div>
        </FormControl>
      </Card>
    </div>
  );
};
