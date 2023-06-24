import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Modal, TextField } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ContextualMenuBar = ({ post, getDeletedData, getEditPost }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState(post.content);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    getEditPost(post._id, content);
  };

  const cotentChange = (e) => {
    setContent(e.target.value);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e, post) => {
    if (e.target.innerText === "Delete") {
      getDeletedData(post._id);
    }
    if (e.target.innerText === "Edit") {
      handleOpenModal();
    }
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        startIcon={<MoreVertIcon />}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      ></Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={(e) => handleClose(e, post)}>Edit</MenuItem>
        <MenuItem onClick={(e) => handleClose(e, post)}>Delete</MenuItem>
      </Menu>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField value={content} onChange={(e) => cotentChange(e)} />
          <Button onClick={() => handleCloseModal()}>Update</Button>
        </Box>
      </Modal>
    </>
  );
};
