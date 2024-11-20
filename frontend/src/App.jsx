import React, { useEffect } from 'react';
import './App.css';
import { Navbar, Footer, SignUp, SignIn, ForgotPassword, ResetPassword, ChangePassword, EmailVerification } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AllPets, About, Service, Contact, AdminDashboard, AdopterDashboard, PublisherDashboard } from './pages';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from './redux/features/auth/authApi';

function App() {

  const dispatch = useDispatch();
  const { user, loading, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    // Check for teh authToken object in localStorage
    const authToken = JSON.parse(localStorage.getItem('authToken'));
    if (authToken && authToken.access_token) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Navbar user={user} isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allpets" element={<AllPets />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up/verify-email" element={<EmailVerification />} />
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
