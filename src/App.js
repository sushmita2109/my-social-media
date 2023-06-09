import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserFeed } from "./Pages/UserFeed/UserFeed";
import { Login } from "./Pages/Login/Login";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <UserFeed />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
