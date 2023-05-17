import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaBars, FaPhone, FaSearch, FaTimes } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {

  // responsive menu icon
  const [clicktwo, setClicktwo] = useState(false);
  const handleClicktwo = () => setClicktwo(!clicktwo);

  // navbar color change
  const [navbarColor, setNavbarColor] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  }
  window.addEventListener("scroll", changeNavbar);

  // change theme
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
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


  return (
    <header id="site-header" className={navbarColor ? "site-header header-scrolled fixed-top" : "site-header fixed-top"}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <h1> <a className="navbar-brand" href="/">
            Pet<span className="sublog">spatial.</span>
          </a></h1>

          <div className={clicktwo ? "mobile-navbar fixed-top" : "collapse navbar-collapse "} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>

            <ul className="navbar-nav-right mt-lg-0 mt-2 ">
              <li className="nav-item mr-2" title="Search"><a href="#search" className="btn search-search">
                <FaSearch area-aria-hidden="true" /></a></li>
              <li className="nav-item mx-xl-4"><a href="tel:+(12)234-11-24"
                className="btn btn-primary btn-white d-none d-lg-block btn-style mr-2 phone-btn"><FaPhone className="mr-xl-3"
                  aria-hidden="true" /> (32)234-14-94</a></li>
            </ul>
          </div>

          <div className="cont-ser-position mt-lg-2">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" for="checkbox">
                  <div className="mode-container fixed" onClick={() => changeTheme()}>
                    <div className="icon" onClick={handleClick}>
                      {click ? <BsSun /> : <BsMoon />}
                    </div>
                  </div>
                </label>
              </div>
            </nav>
          </div>

          <div className="responsive-menu" onClick={handleClicktwo}>
            {clicktwo ? <FaTimes className="icon-expand" /> : <FaBars className="icon-close" />}
          </div>

        </nav>
      </div>
    </header>
  )
}

export default Navbar