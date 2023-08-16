import CakeIcon from "@mui/icons-material/Cake";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { List, ListItem, TextField } from "@mui/material";
import { useAuth } from "../../context/AuthContext/AuthContext";
import Box from "@mui/material/Box";
import { useState } from "react";
import { usePost } from "../../context/PostContext/PostContext";

import { SearchedData } from "../SearchedData/SearchedData";

export const NavBar = ({ islight, setIsLight }) => {
  const [filteredData, setFilteredData] = useState([]);
  const { postStates } = usePost();
  const changeMode = () => {
    setIsLight(!islight);
  };

  const getFilteredData = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm) {
      const newFilter = postStates?.users?.filter((user) =>
        user.username.toLowerCase().includes(searchTerm?.toLowerCase())
      );
      console.log(
        "🚀 ~ file: NavBar.jsx:25 ~ getFilteredData ~ newFilter:",
        newFilter
      );
      setFilteredData(newFilter);
    } else {
      setFilteredData("");
    }
  };

  const { authState } = useAuth();
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",

          justifyContent: "space-between",
          padding: "8px",
          backgroundColor: "#dabdff",
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: 4000,
        }}
      >
        <CakeIcon variant="large" sx={{ color: "white" }} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {authState?.token && (
            <TextField
              id="outlined-basic"
              label="Search User"
              variant="outlined"
              sx={{ color: "white" }}
              onChange={(e) => getFilteredData(e)}
            />
          )}
        </Box>
        <IconButton onClick={() => changeMode()}>
          {islight ? (
            <LightModeIcon sx={{ color: "white" }} />
          ) : (
            <DarkModeIcon sx={{ color: "white" }} />
          )}
        </IconButton>
      </Box>
      <SearchedData filteredData={filteredData} />
    </div>
  );
};
