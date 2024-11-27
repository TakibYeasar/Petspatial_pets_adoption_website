import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from '../redux/features/auth/authApi';
import { toast } from 'react-toastify';

const Navbar = ({ user, isAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light-theme');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Change navbar background on scroll
  const handleScroll = () => {
    setIsScrolled(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark-theme' ? 'light-theme' : 'dark-theme'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Determine dashboard path based on user role
  const getDashboardPath = () => {
    if (user?.role === 'admin') return '/admin';
    if (user?.role === 'adopter') return '/adopter';
    if (user?.role === 'publisher') return '/publisher';
    return '/sign-in'; // Redirect to sign-in if role is undefined
  };

  const handleDashboardClick = () => {
    const path = getDashboardPath();
    navigate(path);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to log out. Please try again.');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-white">
            Pet<span className="text-primary">Spatial</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8 text-white">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <button
                      onClick={handleDashboardClick}
                      className="hover:text-primary transition"
                    >
                      Dashboard
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="hover:text-primary transition"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/sign-in" className="hover:text-primary transition">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link to="/sign-up" className="hover:text-primary transition">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="text-white text-2xl">
              {theme === 'dark-theme' ? <BsSun /> : <BsMoon />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-gray-900 lg:hidden">
            <ul className="flex flex-col items-center space-y-4 text-white py-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <button
                      onClick={() => {
                        handleDashboardClick();
                        toggleMenu();
                      }}
                      className="hover:text-primary transition"
                    >
                      Dashboard
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="hover:text-primary transition"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/sign-in"
                      className="hover:text-primary transition"
                      onClick={toggleMenu}
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sign-up"
                      className="hover:text-primary transition"
                      onClick={toggleMenu}
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
