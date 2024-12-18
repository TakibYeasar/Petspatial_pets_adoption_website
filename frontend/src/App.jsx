import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  Navbar,
  Footer,
  SignUp,
  SignIn,
  ForgotPassword,
  ResetPassword,
  ChangePassword,
  EmailVerification,
} from './components';
import {
  Home,
  AllPets,
  About,
  Service,
  Contact,
  AdminDashboard,
  AdopterDashboard,
  PublisherDashboard,
} from './pages';
import { useDispatch } from 'react-redux';
import { useCurrentUserQuery } from './redux/features/auth/authApi';

function App() {
  const dispatch = useDispatch();
  const { data: user, isLoading, error } = useCurrentUserQuery();

  const isAuthenticated = !!user; // Boolean indicating authentication status

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    if (isLoading) {
      return <div>Loading...</div>; // Show a loading indicator while fetching user data
    }

    if (error) {
      return <Navigate to="/sign-in" replace />; // Redirect to sign-in on error
    }

    return isAuthenticated ? children : <Navigate to="/sign-in" replace />;
  };

  return (
    <BrowserRouter>
      {/* Navbar receives user and authentication status */}
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
