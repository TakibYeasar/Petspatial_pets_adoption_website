import React, { useEffect, useState } from 'react';
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = ({ user, isAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light-theme');

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Change navbar background on scroll
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  window.addEventListener('scroll', handleScroll);

  // Theme toggle
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark-theme' ? 'light-theme' : 'dark-theme'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold text-white">
            <a href="/">
              Pet<span className="text-primary">Spatial</span>
            </a>
          </h1>

          <div className={`lg:flex lg:items-center lg:space-x-8 text-white ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="lg:flex lg:space-x-8 text-white">
              <li><a href="/" className="hover:text-primary transition">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition">About</a></li>
              <li><a href="/services" className="hover:text-primary transition">Services</a></li>
              <li><a href="/contact" className="hover:text-primary transition">Contact</a></li>
              <li><a href="/sign-in" className="hover:text-primary transition">Sign In</a></li>
              <li><a href="/sign-up" className="hover:text-primary transition">Sign Up</a></li>
            </ul>

            <div className="mt-4 lg:mt-0 lg:flex lg:space-x-4 items-center">
              <div className="ml-4 text-2xl cursor-pointer text-white" onClick={toggleTheme}>
                {theme === 'dark-theme' ? <BsSun /> : <BsMoon />}
              </div>
            </div>
            <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

          </div>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;
