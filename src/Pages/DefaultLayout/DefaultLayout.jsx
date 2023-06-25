import { Grid } from "@mui/material";
import { FollowerFriend } from "../../components/FollowerFriend/FollowerFriend";
import { SideBar } from "../../components/SideBar/SideBar";

export const DefaultLayout = ({ children }) => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs
        sm={0}
        md={3}
        lg={3}
        xl={3}
        display={{ xs: "none", md: "block", lg: "block", xl: "block" }}
      >
        <SideBar />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        {children}
      </Grid>
      <Grid
        item
        xs
        sm={0}
        md={3}
        lg={3}
        xl={3}
        display={{ xs: "none", md: "block", lg: "block", xl: "block" }}
      >
        <FollowerFriend />
      </Grid>
    </Grid>
  );
};
