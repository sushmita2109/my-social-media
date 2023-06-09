import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserFeed } from "./Pages/UserFeed/UserFeed";
import { Login } from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserFeed />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
