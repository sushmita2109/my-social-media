import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "./Login.css";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const guestUserData = {
    username: "adarshbalika",
    password: "adarshBalika123",
  };
  const userLogin = () => {
    if (!userData.username.trim() || !userData.password.trim()) {
      toast.error("Enter valid input!");
    } else {
      handleLogin(userData);
    }
  };

  const loginGuest = (user, pass) => {
    setUserData(guestUserData);
    handleLogin(guestUserData);
  };

  return (
    <Box
      sx={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          margin: "20px",
          width: "30%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Login
        </Typography>

        <div className="login-container">
          <FormControl sx={{ m: 1, width: "25ch" }}>
            <InputLabel htmlFor="outlined-adornment-username">
              Username
            </InputLabel>
            <OutlinedInput
              value={userData.username}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, username: e.target.value }))
              }
              id="outlined-adornment-username"
              label="Username"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              value={userData.password}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            variant="contained"
            onClick={() => userLogin()}
            sx={{ marginBottom: "3px" }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={() => loginGuest()}
            sx={{ marginBottom: "3px" }}
          >
            Login as Guest
          </Button>
          <p
            onClick={() => navigate("/signup")}
            className="create-new-account-link"
          >
            Create New account <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
      </Card>
    </Box>
  );
};
