import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Performance from "./pages/performance";
import Learning from "./pages/learning";

function App() {
  return (
      <div className="app">
        <Sidebar />
        <Navbar />
        <div className="main-content">
          <BrowserRouter>
          <Routes>
            <Route exact path="Dashboard" Component={Dashboard}/>
              <Route exact path="Performance" Component={Performance }/>
              <Route exact path="Learning" Component={Learning }/>
          </Routes>
          </BrowserRouter>
        </div>
      </div>
    
  );
}

export default App;
