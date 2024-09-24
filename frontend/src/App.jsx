import React from 'react';
import './App.css';
import { Navbar, Footer } from "./components";
import {
  Homepage,
  Aboutpage,
  Servicepage,
  Contactpage,
  AdminDashboard,
  AdopterDashboard,
  PublisherDashboard,
} from "./pages";
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

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/adopter" element={<AdopterDashboard />} />
        <Route path="/publisher" element={<PublisherDashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
