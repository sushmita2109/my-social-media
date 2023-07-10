import { Button, Card } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../../context/AuthContext/AuthContext";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    bio: "",
  });

  const { userSignup } = useAuth();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const location = useLocation();

  const signupHandler = (e) => {
    e.preventDefault();
    if (
      !userDetails?.firstName.trim() ||
      !userDetails?.lastName.trim() ||
      !userDetails?.username.trim() ||
      !userDetails?.email.trim() ||
      !userDetails?.password.trim() ||
      !userDetails?.confirmPassword.trim()
    ) {
      toast.error("Enter valid input!");
    } else if (userDetails?.password !== userDetails?.confirmPassword) {
      toast.error("Password & Confirm password should match!");
    } else {
      userSignup(userDetails);
    }
  };
  return (
    <Box
      className="box"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ display: "flex", flexDirection: "column" }}>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "firstname",
            }}
            value={userDetails.firstName}
            onChange={(e) =>
              setUserDetails((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
          />
          <FormHelperText id="outlined-weight-helper-text">
            First Name
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight1"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "lastname",
            }}
            value={userDetails.lastName}
            onChange={(e) =>
              setUserDetails((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
          />
          <FormHelperText id="outlined-weight-helper-text">
            Last Name
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight2"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "username",
            }}
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
          />
          <FormHelperText id="outlined-weight-helper-text">
            Username
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight2"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "email",
            }}
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          <FormHelperText id="outlined-weight-helper-text">
            Email
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
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
        <label className="checkbox">
          <input type="checkbox" />I accept all Terms & Conditions
        </label>
        <Button className="loginBtn" onClick={signupHandler}>
          SignUp
        </Button>
        <Link className="signupLink" to="/login">
          Alredy have a account
        </Link>
      </Card>
    </Box>
  );
};
