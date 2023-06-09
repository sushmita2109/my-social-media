import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "./Login.css";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useLocation } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const location = useLocation();

  const { handleLogin } = useAuth();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginGuest = (user, pass) => {
    setUserName(user);
    setPassword(pass);
    handleLogin(user, pass, location?.state?.from?.pathname);
  };
  return (
    <Box
      sx={{
        backgroundColor: "black",
        margin: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          margin: "auto",
          width: "85%",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
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
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id="outlined-adornment-username"
              label="Username"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              value={userPassword}
              onChange={(e) => setPassword(e.target.value)}
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
            onClick={() =>
              handleLogin(
                userName,
                userPassword,
                location?.state?.from?.pathname
              )
            }
            sx={{ marginBottom: "3px" }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={() => loginGuest("adarshbalika", "adarshBalika123")}
            sx={{ marginBottom: "3px" }}
          >
            Login as Guest
          </Button>
        </div>
      </Card>
    </Box>
  );
};
