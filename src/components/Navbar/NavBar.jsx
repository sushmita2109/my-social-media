import CakeIcon from "@mui/icons-material/Cake";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import { usePost } from "../../context/PostContext/PostContext";
import { TextField } from "@mui/material";

export const NavBar = ({ islight, setIsLight }) => {
  const changeMode = () => {
    setIsLight(!islight);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        padding: "8px",
        backgroundColor: "#dabdff",
      }}
    >
      <CakeIcon variant="large" sx={{ color: "white" }} />
      <TextField
        id="outlined-basic"
        label="Search User"
        variant="outlined"
        sx={{ color: "white" }}
      />
      <IconButton onClick={() => changeMode()}>
        {islight ? (
          <LightModeIcon sx={{ color: "white" }} />
        ) : (
          <DarkModeIcon sx={{ color: "white" }} />
        )}
      </IconButton>
    </div>
  );
};
