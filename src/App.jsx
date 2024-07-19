import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/AboutUs/About";
import Scope from "./pages/Scope/Scope";
import Subjects from "./pages/Subjects/Subjects";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";
import Instructor from "./pages/Instructor/Instructor";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/scope" element={<Scope />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Instructor" element={<Instructor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
