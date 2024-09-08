import React, { useEffect, useState } from 'react';
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import {SignIn, SignUp} from '../pages'; 

const Navbar = () => {
  // Responsive menu icon
  const [clicktwo, setClicktwo] = useState(false);
  const handleClicktwo = () => setClicktwo(!clicktwo);

  // Navbar color change
  const [navbarColor, setNavbarColor] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  // Change theme
  const [click, setClick] = useState(false);
  const [theme, setTheme] = useState("light-theme");

  const changeTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Modal state for Sign In and Sign Up
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const toggleSignInModal = () => setSignInModalOpen(!isSignInModalOpen);
  const toggleSignUpModal = () => setSignUpModalOpen(!isSignUpModalOpen);

  return (
    <header
      id="site-header"
      className={`${navbarColor ? "bg-gray-900 shadow-md" : "bg-transparent"} fixed top-0 w-full py-4 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-4">
        <nav className="navbar flex justify-between items-center">
          <h1 className="text-white text-4xl font-bold">
            <a href="/">
              Pet<span className="font-light">spatial.</span>
            </a>
          </h1>

          <div className={`${clicktwo ? "fixed top-0 w-full" : "hidden lg:flex"} lg:flex-grow lg:flex lg:items-center`}>
            <ul className="lg:flex lg:space-x-8 text-white">
              <li className="nav-item">
                <a className="nav-link hover:text-primary" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover:text-primary" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover:text-primary" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover:text-primary" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <div className={`${clicktwo ? "fixed top-0 w-full" : "hidden lg:flex"} lg:flex-grow lg:flex lg:items-center`}>
              <ul className="lg:flex lg:space-x-8 text-white items-center">
                <li className="nav-item">
                  <a href="#search" className="bg-white/20 p-3 rounded-full text-white hover:bg-primary transition-all">
                    <FaSearch aria-hidden="true" />
                  </a>
                </li>

                <li className="nav-item">
                  <button className="nav-link hover:text-primary" onClick={toggleSignInModal}>
                    Sign-In
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link hover:text-primary" onClick={toggleSignUpModal}>
                    Sign-Up
                  </button>
                </li>
              </ul>
            </div>

            <div className="theme-switch-wrapper flex items-center">
              <div className="icon cursor-pointer text-white text-2xl" onClick={changeTheme}>
                {click ? <BsSun /> : <BsMoon />}
              </div>
            </div>

            <div className="ml-4 lg:hidden" onClick={handleClicktwo}>
              {clicktwo ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
            </div>
          </div>
        </nav>

        {/* Sign In Modal */}
        {isSignInModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
              <SignIn />
              <button
                onClick={toggleSignInModal}
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        )}

        {/* Sign Up Modal */}
        {isSignUpModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
              <SignUp />
              <button
                onClick={toggleSignUpModal}
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
