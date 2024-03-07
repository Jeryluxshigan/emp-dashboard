import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Learning from "./pages/learning";
import Profile from "./pages/profile";

function App() {
  return (
      <div className="app">
        <Sidebar />
        <Navbar />
        <div className="main-content">
          <BrowserRouter>
          <Routes>
            <Route exact path="Dashboard" Component={Dashboard}/>
              <Route exact path="Learning" Component={Learning }/>
              <Route exact path="Profile" Component={Profile }/>
          </Routes>
          </BrowserRouter>
        </div>
      </div>
    
  );
}

export default App;
