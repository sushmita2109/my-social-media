import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserFeed } from "./Pages/UserFeed/UserFeed";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserFeed />} />
      </Routes>
    </div>
  );
}

export default App;
