import { BrowserRouter as  Router, Route, Routes, Link} from "react-router-dom";
import { useState } from "react";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

function App() {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeView/>} />
          <Route path="/login" element={<LoginView/>} />
        </Routes>
      </Router>

      
    );
}

export default App;
