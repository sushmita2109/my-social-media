import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserFeed } from "./Pages/UserFeed/UserFeed";
import { Login } from "./Pages/Login/Login";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { IndividualPosts } from "./components/IndividualPosts/IndividualPosts";
import { Bookmark } from "./components/Bookmark/Bookmark";
import { NavBar } from "./components/Navbar/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useState } from "react";
import { Home } from "./Pages/Home/Home";
import { Explore } from "./Pages/Explore/Explore";

function App() {
  const [islight, setIsLight] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: islight ? "dark" : "light",
      primary: {
        main: "#dabdff",
      },
    },
  });
  return (
    <div className="App">
      <NavBar islight={islight} setIsLight={setIsLight} />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/:postId" element={<IndividualPosts />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
