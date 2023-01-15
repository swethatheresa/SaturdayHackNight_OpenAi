import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Gallery from "./components/gallery/gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prompts from "./components/prompts/prompts";
import {} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="prompts" element={<Prompts />} />
      <Route path="gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
