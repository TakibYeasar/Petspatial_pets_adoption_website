import React, { useEffect } from 'react';
import './App.css';
import { Navbar, Footer, SignUp, SignIn, ForgotPassword, ResetPassword, ChangePassword, EmailVerification } from "./components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, AllPets, About, Service, Contact, AdminDashboard, AdopterDashboard, PublisherDashboard } from './pages';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from './redux/features/auth/authApi';

function App() {
  const dispatch = useDispatch();
  const { user, loading, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const authToken = JSON.parse(localStorage.getItem('authToken'));
    if (authToken && authToken.access_token) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/sign-in" />;
  };

  return (
    <BrowserRouter>
      <Navbar user={user} isAuthenticated={isAuthenticated} />
      <Routes>
        {/* Public Routes */}
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

        {/* Protected Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adopter"
          element={
            <ProtectedRoute>
              <AdopterDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/publisher"
          element={
            <ProtectedRoute>
              <PublisherDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
