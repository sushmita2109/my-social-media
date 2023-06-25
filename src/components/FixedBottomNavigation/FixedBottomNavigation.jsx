import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ExploreIcon from "@mui/icons-material/Explore";
import { useNavigate } from "react-router-dom";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const buttonDetails = [
  {
    label: "Home",
    icon: <HomeIcon />,
    routePath: "/",
  },
  {
    label: "Explore",
    icon: <ExploreIcon />,
    routePath: "/explore",
  },
  {
    label: "Bookmark",
    icon: <BookmarksIcon />,
    routePath: "/bookmark",
  },
  {
    label: "Logout",
    icon: <LogoutIcon />,
    routePath: "/login",
  },
];
export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  return (
    <Box
      sx={{ width: 500, position: "fixed" }}
      display={{ md: "none", lg: "none" }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {buttonDetails.map((button) => (
          <BottomNavigationAction
            label={button.label}
            icon={button.icon}
            onClick={() => navigate(button.routePath)}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
