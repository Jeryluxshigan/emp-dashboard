import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Learning from "./pages/learning";
import Profile from "./pages/profile";
import Settings from "./pages/settings";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Navbar />
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route exact path="Dashboard" element={<Dashboard />} />
            <Route exact path="/Learning" element={<Learning />} />
            <Route exact path="/Profile" element={<Profile />} />
            <Route exact path="/Settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
