import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
