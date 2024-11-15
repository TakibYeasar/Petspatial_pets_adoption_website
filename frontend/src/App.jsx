import React from 'react';
import './App.css';
import { Navbar, Footer, SignUp, SignIn, ForgotPassword, ResetPassword, ChangePassword } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AllPets, About, Service, Contact, AdminDashboard, AdopterDashboard, PublisherDashboard } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allpets" element={<AllPets />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-pass" element={<ForgotPassword />} />
        <Route path="/reset-pass" element={<ResetPassword />} />
        <Route path="/change-pass" element={<ChangePassword />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/adopter" element={<AdopterDashboard />} />
        <Route path="/publisher" element={<PublisherDashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
