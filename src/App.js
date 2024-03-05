import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Performance from "./pages/performance"

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
          </Routes>
          </BrowserRouter>
        </div>
      </div>
    
  );
}

export default App;
