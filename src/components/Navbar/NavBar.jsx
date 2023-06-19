import CakeIcon from "@mui/icons-material/Cake";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import { usePost } from "../../context/PostContext/PostContext";

export const NavBar = ({ islight, setIsLight }) => {
  const changeMode = () => {
    setIsLight(!islight);
  };

  return (
    <div>
      <CakeIcon variant="large" />
      <IconButton onClick={() => changeMode()}>
        {islight ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </div>
  );
};
