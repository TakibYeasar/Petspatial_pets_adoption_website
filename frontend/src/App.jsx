import React from 'react';
import './App.css';
import { Navbar, Footer } from "./components";
import { Homepage, Aboutpage, Servicepage, Contactpage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
