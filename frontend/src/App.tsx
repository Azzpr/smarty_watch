import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
// Importing components
import Navbar from "./Components/navbar/Navbar";
// Importing pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
