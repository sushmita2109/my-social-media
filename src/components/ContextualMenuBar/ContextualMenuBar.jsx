import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export const ContextualMenuBar = ({ post, getDeletedData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e, post) => {
    if (e.target.innerText === "Delete") {
      getDeletedData(post._id);
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
    </>
  );
};
